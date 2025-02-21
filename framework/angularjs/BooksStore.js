var bookStoreModule=angular.module("my.new.module",[]);
bookStoreModule.service('Book',['$rootScope',function($rootScope ) {
   var service={
      books:[
        {title:"《Ext江湖》",author:"大漠穷秋"},
        {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"}
      ],
      addBook:function(book){
         service.books.push(book);
         $rootScope.$broadcast('books.update');
      }
   }
   return service;
}]);

bookStoreModule.controller("book.list",['$scope','Book',function(scope,Book){
   scope.$on('books.update',function(event){
       scope.books = Book.books;
       scope.$apply();
   });
   scope.books=Book.books;
}]);

bookStoreModule.directive("addBookButton",['Book',function(Book){
    return {
        restrict:"A",
            link:function(scope,element,attrs){
            element.bind("click",function(){
                Book.addBook({title:"《使用AngularJS开发下一代WEB应用》",author:"大漠穷秋"});
            });
        }
    }
}]);

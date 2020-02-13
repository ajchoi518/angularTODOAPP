angular.module('todoApp').directive('todoTitle',function(){ 
                //when you create the name, use carmel methods rather then use hypen
    return{
      template:'<h1>Todo List</h1>' //words that replace h1 tag
    }            
                
                
});

angular.module('todoApp').directive('todoItem',function(){
  return{
    templateUrl:'todoItem.tpl.html'
    
    
            // '<div class="input-group">'+
            //   '<span class="input-group-addon">'+
            //     '<input type="checkbox" ng-model="todo.completed" aria-label="...">'+
            //   '</span>'+
            //   '<input type="text" ng-model="todo.title" class="form-control" placeholder="Search for...">'+
            //   '<span class="input-group-btn">'+
            //     '<button class="btn btn-danger" type="button" ng-click="remove(todo)">Delete</button>'+
            //   '</span>'+
            // '</div>'+
            // '<date>{{todo.createdAt | date:"yyyy-MM-dd HH:mm:ss"}}</date>'
  }
})

angular.module('todoApp').directive('todoForm',function(){
  return{
    templateUrl:'todoForm.tpl.html'
  
  }
})

angular.module('todoApp').directive('todoFilters',function(){
  return{
    templateUrl:'todoFilters.tpl.html'
  
  }
})
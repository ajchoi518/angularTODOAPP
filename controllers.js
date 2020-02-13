angular.module('todoApp').controller('TodoCtrl',function($scope,todoStorage){ //module name of todo

    $scope.todos=todoStorage.get();
    
    /*$scope.name='Amy';*/
    /*$scope.todos=[ 
      
      {
      title:'Workout',
      completed:true,
      createdAt:Date.now()
      },
      {
      title:'Cooking',
      completed:false,
      createdAt:Date.now()
      },
      {
      title:'Study',
      completed:false,
      createdAt:Date.now()
      }
    
    ];
    */
    $scope.add=function(newTodoTitle){ //add function creation
      //alert(newTodoTitle);
      // var newTodo={ //the info below directly goes to the list of $scope.todos
      //   title:newTodoTitle,
      //   completed:false,
      //   createdAt:Date.now()
      // };
      
      // $scope.todos.push(newTodo);//add to the list
      
      todoStorage.add(newTodoTitle);
      
      $scope.newTodoTitle=""; //way to make a blank on add new list.
    }
    
    $scope.remove=function(todo){ //remove the list when click the delete btn.
      // var idx=$scope.todos.findIndex(function(item){ //bring indx num from todos follow by clicked delete btn 
      //   return item.id===todo.id;
      // }); 
      
      // if(idx > -1){ //if idx num is exist(number is bigger then 1 means, the numer exist)
      //   $scope.todos.splice(idx,1) //delete matched index num only
      // }
      
      todoStorage.remove(todo);
      
    }
    
    $scope.update=function(){
      todoStorage.update();
    }
    
});
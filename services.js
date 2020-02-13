angular.module('todoApp').factory('todoStorage',function(){
  
  var TODO_DATA ='TODO_DATA';//consistent number_fixed value must be capital letter
  
  var storage={
    
    todos:[ 
      
      // {
      // title:'Workout',
      // completed:true,
      // createdAt:Date.now()
      // },
      // {
      // title:'Cooking',
      // completed:false,
      // createdAt:Date.now()
      // },
      // {
      // title:'Study',
      // completed:false,
      // createdAt:Date.now()
      // }
    
    ],
    
  _saveToLocalStorage:function(data){ //private function that outerside cannot refers
    localStorage.setItem(TODO_DATA,JSON.stringify(data))
  },
  
  _getFromLocalStorage:function(){
    return JSON.parse(localStorage.getItem(TODO_DATA)) || []; 
  },
  
    
    get:function(){
      angular.copy(storage._getFromLocalStorage(),storage.todos)
      return storage.todos;
    },
    
    add:function(newTodoTitle){
      
      var newTodo={ 
        title:newTodoTitle,
        completed:false,
        createdAt:Date.now()
      };
      
      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage,todos);
      storage.newTodoTitle="";
      return storage.todos;
    },
    
    remove:function(todo){
      
       var idx=storage.todos.findIndex(function(item){  
        return item.id===todo.id;
      }); 
      
      if(idx > -1){
        storage.todos.splice(idx,1)
        storage._saveToLocalStorage(storage.todos);
      }
      
     
    },
    
    update:function(){
      storage._saveToLocalStorage(storage.todos);
    }
  }
  
  return storage;
})
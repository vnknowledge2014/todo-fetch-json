import axios from 'axios';
import todoAPI from './API/todo-apis';
import Todo from './interface/iTodo';

let todoItemUpdate: Todo = <Todo>{
  userId: 1,
  id: 1,
  title: 'ipsam aperiam voluptates',
  completed: true
};

let todoItem: Todo = <Todo>{
  userId: 10,
  id: 201,
  title: 'ipsam aperiam voluptates',
  completed: true
};

let todoItem2: Todo = <Todo>{
  userId: 10,
  id: 202,
  title: 'ipsam aperiam voluptates',
  completed: false
};

let makeATodoList = [todoItem, todoItem2];

// todoAPI.getTodoList();
// todoAPI.getTodoItemFollowByID(10);
// todoAPI.deleteTodoItemFollowByID(1);
// todoAPI.updateTodoItemFollowByID(1, todoItemUpdate);
// todoAPI.addNewTodoItem(todoItem);
// todoAPI.addListTodoItem(makeATodoList);

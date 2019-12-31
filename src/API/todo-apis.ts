import axios from './node_modules/axios';
import url from '../lib/env';
import logTodo from '../lib/console';
import Todo from '../interface/iTodo';

export default {
  getTodoList: () => {
    axios.get(url).then(res => {
      const todoList: Todo[] = res.data;

      for (let todo of todoList) {
        const ID = todo.id;
        const TITLE = todo.title;
        const COMPLETED = todo.completed;

        logTodo(`
          The Todo with ID: ${ID}
          Has a title of: ${TITLE}
          Is it finished? ${COMPLETED}
        `);
      }
    });
  },

  getTodoItemFollowByID: (id: number) => {
    axios.get(`${url}${id}`).then(res => {
      const todo: Todo = res.data;

      const ID = todo.id;
      const TITLE = todo.title;
      const COMPLETED = todo.completed;

      logTodo(`
          The Todo with ID: ${ID}
          Has a title of: ${TITLE}
          Is it finished? ${COMPLETED}
        `);
    });
  },

  addNewTodoItem: (todo: Todo) => {
    axios.post(`${url}`, todo).then(res => {
      const todo: Todo = res.data;

      const ID = todo.id;
      const TITLE = todo.title;
      const COMPLETED = todo.completed;

      logTodo(`
          The Todo with ID: ${ID}
          Has a title of: ${TITLE}
          Is it finished? ${COMPLETED}
        `);
    });
  },

  addListTodoItem: (taskList: Todo[]) => {
    axios.post(`${url}`, taskList).then(res => {
      let todoList: Todo[] = Object.values(res.data);
      todoList.splice(todoList.length - 1, 1);

      for (let todo of todoList) {
        const ID = todo.id;
        const TITLE = todo.title;
        const COMPLETED = todo.completed;

        logTodo(`
          The Todo with ID: ${ID}
          Has a title of: ${TITLE}
          Is it finished? ${COMPLETED}
        `);
      }
    });
  },

  updateTodoItemFollowByID: (id: number, todo: Todo) => {
    axios.put(`${url}${id}`, todo).then(res => {
      const todo: Todo = res.data;

      const ID = todo.id;
      const TITLE = todo.title;
      const COMPLETED = todo.completed;

      logTodo(`
          The Todo with ID: ${ID}
          Has a title of: ${TITLE}
          Is it finished? ${COMPLETED}
        `);
    });
  },

  deleteTodoItemFollowByID: (id: number) => {
    axios.delete(`${url}${id}`);
  }
};

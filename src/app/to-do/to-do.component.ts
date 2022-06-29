import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service"

@Component({
  selector: 'todos',
  templateUrl: 'to-do.component.html',
  styleUrls: ['to-do.component.scss'],
})
export class TodosComponent {
  newTodo: string;
  todos: any;
  todoObj: any;
  username: any;

  constructor(private user:AuthService) {
    this.newTodo = '';
    this.todos = [];
    this.username = '' ;

  }
  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    //console.log('usrrr',this.username)
  }

  addTodo(event: any) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
    //event.preventDefault();
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    // reverse loop in order to splice by index
    for (var i = this.todos.length - 1; i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
    this.user.getData().subscribe(data =>{
      console.log("Api called", data)
    })
  }
}

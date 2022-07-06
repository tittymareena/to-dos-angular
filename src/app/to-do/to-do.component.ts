import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service"
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { increment, decrement, reset } from '../ngrx/actions';

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
  count$: Observable<number> | any;
  constructor(private user:AuthService, private store: Store<{ count: number }>) {
    this.newTodo = '';
    this.todos = [];
    this.username = '' ;
    this.count$ = store.select('count');

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

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}

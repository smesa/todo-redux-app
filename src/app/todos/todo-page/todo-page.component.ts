import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  compleado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.compleado = !this.compleado;
    this.store.dispatch(actions.toggleAll({ completado: this.compleado }));
  }

}

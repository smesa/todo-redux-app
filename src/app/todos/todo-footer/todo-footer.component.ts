import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actionsFiltros from 'src/app/filtro/filtro.actions';
import * as actionsTodos from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actionsFiltros.filtrosValidos = 'todos';
  filtros: actionsFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actionsFiltros.filtrosValidos): void {
    this.store.dispatch(actionsFiltros.setFiltro({ filtro: filtro }));
  }

  limpiarCompletados(): void {
    this.store.dispatch(actionsTodos.limpiarCompletados());
  }

}

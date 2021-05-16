import { Component, OnInit } from '@angular/core';
import { ItemTodo } from './table-todo/item-todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  minhaLista: Array<ItemTodo> = [];
  minhaLista2: Array<ItemTodo> = [];

  ngOnInit(): void {
    this.minhaLista = [
      { id: 1, descricao: 'Teste inicial', feita: true }
    ];
  }

  funSalvou(item: ItemTodo) {
    alert(item.descricao);
  }

}


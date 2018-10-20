import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  // @Output() update: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    // this.update.emit({
    //   item: this.item,
    //   changes: {completed: !this.item.completed}
    // });
    this.isComplete = !this.isComplete;
  }
}

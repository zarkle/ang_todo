import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(inputElementReference) {
    this.title = inputElementReference.value;
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}

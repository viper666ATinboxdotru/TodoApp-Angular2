import { TodoModel } from './../../models/todo-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // moduleId: module.id,
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  @Input()
  public _taskDetail: TodoModel;

  @Output()
  onDel: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  passTaskId() : void{
    this.onDel.emit(this._taskDetail.Id);
  }

}

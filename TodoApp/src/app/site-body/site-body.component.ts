import { SpinnerComponent } from './../spinner/spinner.component';
import { TaskDetailsComponent } from 'app/site-body/task-details/task-details.component';
// import { TaskDetailsComponent } from './task-details/task-details.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { TodoAppApiService } from './../services/todo-app-api.service';
import { TodoModel } from './../models/todo-model';
import { Component, OnInit } from '@angular/core';



@Component({
  // moduleId: module.id,
  selector: 'app-site-body',
  templateUrl: './site-body.component.html',
  styleUrls: ['./site-body.component.css']
})
export class SiteBodyComponent implements OnInit {

  public isRequesting: boolean;

  _newTaskText: string;
  _taskList: TodoModel[] = [];

  constructor(
    private _todoAppApi: TodoAppApiService
  ) { }

  ngOnInit() {
    this.getTaskList();
  }

  //Add new Task
  addTask(): void {
    this.isRequesting = true;
    const prom = this._todoAppApi.addNewTask(this._newTaskText);
    const source$ = Observable.fromPromise(prom);
    source$.subscribe((newTask) => { this._taskList.push(newTask); },
      () => this.stopRefreshing(),
      () => this.stopRefreshing()
    );
  }

  //Delete Task
  deleteTask(id: number): void {
    this.isRequesting = true;
    const prom = this._todoAppApi.deleteTask(id);
    const source$ = Observable.fromPromise(prom);
    source$.subscribe(() => {
      var index = this._taskList.findIndex((o) => {
        return o.Id === id;
      });
      this._taskList.splice(index, 1);
    },
      () => this.stopRefreshing(),
      () => this.stopRefreshing());
  }

  //get list of tasks
  getTaskList(): void {
    this.isRequesting = true;

    const prom = this._todoAppApi.getTasks();
    const source$ = Observable.fromPromise(prom);
    source$.subscribe(
      (todoList) => { this._taskList = todoList; },
      () => this.stopRefreshing(),
      () => this.stopRefreshing());

  }

  private stopRefreshing() {
    this.isRequesting = false;
  }

}

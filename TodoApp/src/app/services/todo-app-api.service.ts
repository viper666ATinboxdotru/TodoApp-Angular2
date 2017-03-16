import { TodoModel } from './../models/todo-model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoAppApiService {

  constructor() { }

  getTasks(): Promise<TodoModel[]>{

    return new Promise<TodoModel[]>((resolve,reject)=>{
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {

            resolve(JSON.parse(this.response));
          } else {           
            reject(new Error(xhr.statusText));
          }
        }
      }

      xhr.open("GET", "https://adtodolistwebapi.azurewebsites.net/api/todo", true);
      xhr.send()
    });
  }

addNewTask(taskText: string): Promise<TodoModel> {

    return new Promise<TodoModel>((resolve, reject) => {
      
      var xhr = new XMLHttpRequest();
      var objToSend = new TodoModel(taskText);
      var body = JSON.stringify(objToSend);

      xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
          //good

          if (xhr.status == 201) {
            resolve(JSON.parse(this.response));
          }
          else {
            reject();
          }
        }

      }
      xhr.open("POST", "https://adtodolistwebapi.azurewebsites.net/api/todo", true);
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(body);

    });
  }

  deleteTask(taskId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4) {
          //good
    
          if (xhr.status == 204) {
            resolve();
          }
        }
      }

      xhr.open("DELETE", "https://adtodolistwebapi.azurewebsites.net/api/todo/" + taskId, true);
      xhr.send(null)
    });

  }


}

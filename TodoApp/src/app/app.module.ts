
import { TodoAppApiService } from './services/todo-app-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteBodyComponent } from './site-body/site-body.component';
import { TaskDetailsComponent } from "app/site-body/task-details/task-details.component";
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './login/login.component';


//Routing
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from "app/app-routing/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteBodyComponent,
    TaskDetailsComponent,
    SpinnerComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [
    TodoAppApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

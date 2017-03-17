
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


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteBodyComponent,
    TaskDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoAppApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

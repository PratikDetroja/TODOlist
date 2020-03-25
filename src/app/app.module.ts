import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { Page404Component } from "./page404/page404.component";

import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TaskListComponent,
    AddTaskComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

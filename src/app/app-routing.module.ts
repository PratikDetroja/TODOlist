import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TaskListComponent } from "./task-list/task-list.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { Page404Component } from "./page404/page404.component";

const routes: Routes = [
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "addTask", component: AddTaskComponent },
  { path: "taskList", component: TaskListComponent },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {UserlistComponent} from "./userlist/userlist.component";

const routes: Routes = [
  {path: "adduser", component: AddUserComponent},
  {path: "userlist", component: UserlistComponent},
  {path: "**", redirectTo: "adduser" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

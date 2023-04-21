import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../shared-module/page-not-found/page-not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { TechnologyComponent } from "./technology/technology.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { AuthGuard } from "../shared-module/guards/auth.guard";
import { UserGuard } from "../shared-module/guards/user.guard";

const routes: Routes = [{
  path: '',
  component: UserLoginComponent
},
{
  path: 'user-add',
  component: UserAddComponent,
  canActivate: [AuthGuard]
},
{
  path: 'user-forget-password',
  component: ForgetPasswordComponent
},
{
  path: 'user-dashboard',
  component: DashboardComponent,
  canActivate: [UserGuard]
},
{
  path: 'technology',
  component: TechnologyComponent,
  canActivate: [UserGuard]
},
// {
//   path: '**',
//   component: PageNotFoundComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

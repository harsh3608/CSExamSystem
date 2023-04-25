import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRoutingModule } from "./user.routing.module";
import { TechnologyService } from "../shared-module/common-services/technology-service/technology.service";
import { TechnologyComponent } from "./technology/technology.component";
import { ToastrModule } from "ngx-toastr";
import { SharedModuleModule } from "../shared-module/shared-module.module";

@NgModule({
  declarations: [
    UserLoginComponent,
    UserAddComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    TechnologyComponent
  ],
  imports: [
    UserRoutingModule,
    ToastrModule.forRoot(),
    SharedModuleModule
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})
export class UserModule { }

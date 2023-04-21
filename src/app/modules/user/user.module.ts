import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "src/app/app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRoutingModule } from "./user.routing.module";
import { MatGridListModule } from '@angular/material/grid-list'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TechnologyService } from "../shared-module/common-services/technology-service/technology.service";
import { HttpClientModule } from "@angular/common/http";
import { TechnologyComponent } from "./technology/technology.component";
import { MatDialogModule } from "@angular/material/dialog"
import { MatIconModule } from "@angular/material/icon"
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
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
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),

    SharedModuleModule
  ],
  providers: [TechnologyService],
  bootstrap: [AppComponent]
})
export class UserModule { }

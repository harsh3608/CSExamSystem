import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ToastrModule } from "ngx-toastr";


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
    //SharedModuleRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class SharedModuleModule { }

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app/app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CKEditorModule } from "ckeditor4-angular";
import { DropdownModule } from "primeng/dropdown";
import { PaginatorModule } from "primeng/paginator";
import { TooltipModule } from "primeng/tooltip";


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports:[
    CommonModule,
    BrowserModule,
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
    MatPaginatorModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CKEditorModule,
    DropdownModule,
    PaginatorModule,
    TooltipModule,
  ],
  providers: [],
  exports:[
    CommonModule,
    BrowserModule,
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
    MatPaginatorModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CKEditorModule,
    DropdownModule,
    PaginatorModule,
    TooltipModule,
  ],
  bootstrap: [AppComponent]
})

export class SharedModuleModule { }

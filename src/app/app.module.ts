import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/admin/index/index.component';
import { SelectOfficeComponent } from './components/modules/office/select-office/select-office.component';
import { HttpClientModule } from '@angular/common/http';
import { DatatableUserComponent } from './components/modules/user/datatable-user/datatable-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonCreateUserComponent } from './components/modules/user/button-create-user/button-create-user.component';
import { FormUpsertUserComponent } from './components/modules/user/form-upsert-user/form-upsert-user.component';
import { ModalComponent } from './components/templates/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SelectOfficeComponent,
    DatatableUserComponent,
    ButtonCreateUserComponent,
    FormUpsertUserComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

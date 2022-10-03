import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/admin/index/index.component';
import { SelectOfficeComponent } from './components/modules/office/select-office/select-office.component';
import { HttpClientModule } from '@angular/common/http';
import { DatatableUserComponent } from './components/modules/user/datatable-user/datatable-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, IndexComponent, SelectOfficeComponent, DatatableUserComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

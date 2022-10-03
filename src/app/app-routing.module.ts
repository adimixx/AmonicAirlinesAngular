import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent as AdminIndexComponent } from './pages/admin/index/index.component';

const routes: Routes = [{ path: '', component: AdminIndexComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

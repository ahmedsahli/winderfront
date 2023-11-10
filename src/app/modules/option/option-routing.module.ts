import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './option/components/option.component';
import { OptionAdminComponent } from './option-admin/components/option-admin.component';

const routes: Routes = [
  {
    path: 'all',
    component: OptionComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionRoutingModule { }

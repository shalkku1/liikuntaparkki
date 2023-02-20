import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './components/chart-page/chart-page.component'

const routes: Routes = [
  { path: 'chart-page', component: ChartPageComponent },
  { path: '**', component: ChartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

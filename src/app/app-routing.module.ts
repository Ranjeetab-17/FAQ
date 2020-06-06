import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfaqComponent } from './components/addfaq/addfaq.component';
import { FaqsComponent } from './components/faqs/faqs.component';


const routes: Routes = [
  { path: '', component: FaqsComponent },
  { path: 'add', component: AddfaqComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

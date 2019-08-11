import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './components/tracker/tracker.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: TrackerComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

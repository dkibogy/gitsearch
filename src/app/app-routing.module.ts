import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { link } from 'fs';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';




const routes: Routes = [
  { path: 'user-link', component: UserComponent },
  { path: 'repo-link', component: RepoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

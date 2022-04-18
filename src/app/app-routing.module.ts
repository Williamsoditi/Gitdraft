import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoComponent } from './repo/repo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'repo', component: RepoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'users', component: UsersComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

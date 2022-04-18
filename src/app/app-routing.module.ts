import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { RepoComponent } from './repo/repo.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'repo', component: RepoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'users', component: UsersComponent },
  { path: 'user-search', component: UserSearchComponent},
  { path: 'repo-search', component: RepoSearchComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

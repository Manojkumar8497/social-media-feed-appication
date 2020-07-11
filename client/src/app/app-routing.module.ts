import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedListsComponent } from './feed/feed-lists/feed-lists.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/feeds', pathMatch: 'full'
  },
  {
    path: 'feeds', component: FeedListsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieListComponent } from './components/pages/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-list', component: MovieListComponent } 

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

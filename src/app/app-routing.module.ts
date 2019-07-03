import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { LauncheListComponent } from './launches/launche-list/launche-list.component';
// import { LauncheComponent } from './launches/launche/launche.component';

const routes: Routes = [
  { path: 'pictureOfTheDay', component: PicOfTheDayComponent },
  { path: 'spaceXLaunches', component: LauncheListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

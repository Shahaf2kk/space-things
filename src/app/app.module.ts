import { SearchService } from './launches/search/search.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { Global } from './globals/global';

// angular matirial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

// modules
import { AppRoutingModule } from './app-routing.module';

// services
import { LaunchesService } from './launches/launches.service';
import { SpacexApiCallsService } from './shared/api-services/spacex-api-calls.service';

// pipe
import { SearchPipe } from './shared/pipe/search.pipe';

// components
import { AppComponent } from './app.component';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { LauncheComponent } from './launches/launche/launche.component';
import { LauncheListComponent } from './launches/launche-list/launche-list.component';
import { LauncheLinksComponent } from './launches/launche/launche-links/launche-links.component';
import { SearchComponent } from './launches/search/search.component';
import { InputComponent } from './launches/search/input/input.component';
import { SearchTitlePipe } from './shared/pipe/search-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PicOfTheDayComponent,
    LauncheComponent,
    LauncheListComponent,
    LauncheLinksComponent,
    SearchComponent,
    SearchPipe,
    InputComponent,
    SearchTitlePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

  ],
  providers: [Global, LaunchesService, SpacexApiCallsService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

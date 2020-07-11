import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NPM library
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Components
import { HeaderComponent } from './layouts/header/header.component';
import { FeedListsComponent } from './feed/feed-lists/feed-lists.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddFeedComponent } from './feed/feed-lists/add-feed/add-feed.component';
import { FeedCardComponent } from './feed/feed-lists/feed-card/feed-card.component';

// Shared components
import { LoadingComponent } from './shared/components/loading.component';
import { DatePipe } from './shared/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedListsComponent,
    NotFoundComponent,
    AddFeedComponent,
    FeedCardComponent,
    LoadingComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.rotatingPlane,
      backdropBackgroundColour: '#3273dc',
      backdropBorderRadius: '0px',
      primaryColour: '#ecf0f1',
      secondaryColour: '#e74c3c',
      tertiaryColour: '#34495e'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

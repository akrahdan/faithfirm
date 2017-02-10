import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FARoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestComponent } from './latest/latest.component';
import { PicksComponent } from './picks/picks.component';
import { TopComponent } from './top/top.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestComponent,
    PicksComponent,
    TopComponent,
    SearchComponent,
    HomeComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FARoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

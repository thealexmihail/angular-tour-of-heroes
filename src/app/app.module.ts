import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroPowerStatsComponent } from './hero-power-stats/hero-power-stats.component';
import { HeroOverallRatingComponent } from './hero-overall-rating/hero-overall-rating.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, HeroPowerStatsComponent, HeroOverallRatingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

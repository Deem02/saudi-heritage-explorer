import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { RegionsComponent } from './components/regions/regions.component';
import { ClosingComponent } from './components/closing/closing.component';
import { HeritageCategoryId } from './models/heritage.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ExploreComponent,
    FeaturedComponent,
    RegionsComponent,
    ClosingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /** Selected category filter, shared between the explore & featured sections. */
  activeCategory: HeritageCategoryId | null = null;

  onCategorySelected(category: HeritageCategoryId | null): void {
    this.activeCategory = category;
  }
}

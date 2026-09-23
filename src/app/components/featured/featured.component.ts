import { Component, computed, Input, signal } from '@angular/core';
import { FEATURED_ITEMS } from '../../data/heritage-data';
import { FeaturedHeritageItem, HeritageCategoryId } from '../../models/heritage.model';

@Component({
  selector: 'app-featured',
  standalone: true,
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent {
  private readonly allItems: FeaturedHeritageItem[] = FEATURED_ITEMS;
  private readonly category = signal<HeritageCategoryId | null>(null);

  @Input() set activeCategory(value: HeritageCategoryId | null) {
    this.category.set(value);
  }

  readonly items = computed(() => {
    const current = this.category();
    return current ? this.allItems.filter((item) => item.category === current) : this.allItems;
  });
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HERITAGE_CATEGORIES } from '../../data/heritage-data';
import { HeritageCategory, HeritageCategoryId } from '../../models/heritage.model';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  @Input() activeCategory: HeritageCategoryId | null = null;
  @Output() categorySelected = new EventEmitter<HeritageCategoryId | null>();

  readonly categories: HeritageCategory[] = HERITAGE_CATEGORIES;

  toggleCategory(id: HeritageCategoryId): void {
    this.categorySelected.emit(this.activeCategory === id ? null : id);
  }

  get activeCategoryTitle(): string | null {
    return this.categories.find((c) => c.id === this.activeCategory)?.title ?? null;
  }
}

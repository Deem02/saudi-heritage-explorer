import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  scrollToExplore(): void {
    document
      .getElementById('explore')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-closing',
  standalone: true,
  templateUrl: './closing.component.html',
  styleUrl: './closing.component.scss',
})
export class ClosingComponent {
  scrollToExplore(): void {
    document
      .getElementById('explore')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

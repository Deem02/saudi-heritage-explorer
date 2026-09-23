import { Component } from '@angular/core';
import { SAUDI_REGIONS } from '../../data/heritage-data';
import { SaudiRegion } from '../../models/heritage.model';

@Component({
  selector: 'app-regions',
  standalone: true,
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss',
})
export class RegionsComponent {
  readonly regions: SaudiRegion[] = SAUDI_REGIONS;
}

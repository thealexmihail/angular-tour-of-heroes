import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-overall-rating',
  templateUrl: './hero-overall-rating.component.html',
  styleUrls: ['./hero-overall-rating.component.scss'],
})
export class HeroOverallRatingComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() {}

  ngOnInit(): void {}
}

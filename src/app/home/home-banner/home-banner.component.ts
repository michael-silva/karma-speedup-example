import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent {
  @Input() title = 'my banner';
}

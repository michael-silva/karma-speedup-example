import { Component, Input, OnInit } from '@angular/core';
import { BannerService } from '../../shared/services/banner.service';

@Component({
  selector: 'home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
  @Input() title = 'my banner';
  items = [];

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.getAlbums()
      .subscribe(albums => this.items = albums);
  }
}

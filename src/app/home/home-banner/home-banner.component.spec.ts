import { TestBed, async } from '@angular/core/testing';

import { HomeBannerComponent } from './home-banner.component';
import { HomeModule } from '../home.module';
import { SharedModule } from '../../shared/shared.module';

describe('HomeBannerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule, // This module has about 50 components.
        SharedModule // This module has about 150 components.
      ]
    }).compileComponents();
  }));

  for (let x = 0; x < 100; x++) {
    it('should render title in a h1 tag ' + x, async(() => {
      const fixture = TestBed.createComponent(HomeBannerComponent);
      const component = fixture.componentInstance;
      component.title = `my banner ${x}`;
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(`my banner ${x}`);
    }));
  }
});

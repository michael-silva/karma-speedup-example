import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeBannerComponent } from './home-banner.component';
import { BannerService } from '../../shared/services/banner.service';
import { TestSuite } from '../../../test-suite';

describe('HomeBannerComponent', () => {

  TestSuite.configure();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeBannerComponent
      ],
      providers: [
        BannerService,
      ],
      imports: [
        HttpClientTestingModule
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

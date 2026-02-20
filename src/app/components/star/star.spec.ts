import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Star } from './star';

describe('Star', () => {
  let component: Star;
  let fixture: ComponentFixture<Star>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Star]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Star);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

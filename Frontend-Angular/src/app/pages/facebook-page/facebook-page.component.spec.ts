import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPageComponent } from './facebook-page.component';

describe('FacebookPageComponent', () => {
  let component: FacebookPageComponent;
  let fixture: ComponentFixture<FacebookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

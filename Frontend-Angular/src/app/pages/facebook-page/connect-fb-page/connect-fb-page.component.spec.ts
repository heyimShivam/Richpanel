import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFbPageComponent } from './connect-fb-page.component';

describe('ConnectFbPageComponent', () => {
  let component: ConnectFbPageComponent;
  let fixture: ComponentFixture<ConnectFbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectFbPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectFbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

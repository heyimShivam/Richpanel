import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFbPageComponent } from './delete-fb-page.component';

describe('DeleteFbPageComponent', () => {
  let component: DeleteFbPageComponent;
  let fixture: ComponentFixture<DeleteFbPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFbPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInComponent } from './admin-in.component';

describe('AdminInComponent', () => {
  let component: AdminInComponent;
  let fixture: ComponentFixture<AdminInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

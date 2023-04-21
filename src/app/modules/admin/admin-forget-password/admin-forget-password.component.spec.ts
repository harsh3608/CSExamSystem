import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgetPasswordComponent } from './admin-forget-password.component';

describe('AdminForgetPasswordComponent', () => {
  let component: AdminForgetPasswordComponent;
  let fixture: ComponentFixture<AdminForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForgetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesUpdateComponent } from './technologies-update.component';

describe('TechnologiesUpdateComponent', () => {
  let component: TechnologiesUpdateComponent;
  let fixture: ComponentFixture<TechnologiesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDetailComponent } from './technologies-detail.component';

describe('TechnologiesDetailComponent', () => {
  let component: TechnologiesDetailComponent;
  let fixture: ComponentFixture<TechnologiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

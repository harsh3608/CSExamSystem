import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesListComponent } from './technologies-list.component';

describe('TechnologiesListComponent', () => {
  let component: TechnologiesListComponent;
  let fixture: ComponentFixture<TechnologiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

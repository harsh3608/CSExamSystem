import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesAddComponent } from './technologies-add.component';

describe('TechnologiesAddComponent', () => {
  let component: TechnologiesAddComponent;
  let fixture: ComponentFixture<TechnologiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

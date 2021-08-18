import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarsComponent } from './cards-cars.component';

describe('CardsCarsComponent', () => {
  let component: CardsCarsComponent;
  let fixture: ComponentFixture<CardsCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

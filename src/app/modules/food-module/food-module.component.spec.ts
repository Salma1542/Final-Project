import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodModuleComponent } from './food-module.component';

describe('FoodModuleComponent', () => {
  let component: FoodModuleComponent;
  let fixture: ComponentFixture<FoodModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

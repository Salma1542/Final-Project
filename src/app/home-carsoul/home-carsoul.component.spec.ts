import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarsoulComponent } from './home-carsoul.component';

describe('HomeCarsoulComponent', () => {
  let component: HomeCarsoulComponent;
  let fixture: ComponentFixture<HomeCarsoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCarsoulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCarsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

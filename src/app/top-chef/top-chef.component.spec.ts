import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopChefComponent } from './top-chef.component';

describe('TopChefComponent', () => {
  let component: TopChefComponent;
  let fixture: ComponentFixture<TopChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

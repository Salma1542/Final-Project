import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardItemComponent } from './recipe-card-item.component';

describe('RecipeCardItemComponent', () => {
  let component: RecipeCardItemComponent;
  let fixture: ComponentFixture<RecipeCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

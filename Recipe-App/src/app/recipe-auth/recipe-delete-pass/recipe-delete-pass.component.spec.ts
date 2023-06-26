import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeletePassComponent } from './recipe-delete-pass.component';

describe('RecipeDeletePassComponent', () => {
  let component: RecipeDeletePassComponent;
  let fixture: ComponentFixture<RecipeDeletePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDeletePassComponent]
    });
    fixture = TestBed.createComponent(RecipeDeletePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

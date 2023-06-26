import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLoginComponent } from './recipe-login.component';

describe('RecipeLoginComponent', () => {
  let component: RecipeLoginComponent;
  let fixture: ComponentFixture<RecipeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeLoginComponent]
    });
    fixture = TestBed.createComponent(RecipeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLoginComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePassForgotComponent } from './recipe-pass-forgot.component';

describe('RecipePassForgotComponent', () => {
  let component: RecipePassForgotComponent;
  let fixture: ComponentFixture<RecipePassForgotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipePassForgotComponent]
    });
    fixture = TestBed.createComponent(RecipePassForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePassForgotComponent]
    })
    .compileComponents();
  });

  it('generate', () => {
    expect(component).toBeTruthy();
  });
});

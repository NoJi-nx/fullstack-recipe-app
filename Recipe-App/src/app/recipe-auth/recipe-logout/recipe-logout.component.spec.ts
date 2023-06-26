import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLogoutComponent } from './recipe-logout.component';

describe('RecipeLogoutComponent', () => {
  let component: RecipeLogoutComponent;
  let fixture: ComponentFixture<RecipeLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeLogoutComponent]
    });
    fixture = TestBed.createComponent(RecipeLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeLogoutComponent ]
    })
    .compileComponents();
  });

  it('sgenerate', () => {
    expect(component).toBeTruthy();
  });
});

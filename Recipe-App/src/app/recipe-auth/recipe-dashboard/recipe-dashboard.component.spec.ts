import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDashboardComponent } from './recipe-dashboard.component';

describe('RecipeDashboardComponent', () => {
  let component: RecipeDashboardComponent;
  let fixture: ComponentFixture<RecipeDashboardComponent>;



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDashboardComponent]
    });
    fixture = TestBed.createComponent(RecipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDashboardComponent ]
    })
    .compileComponents();
  });
  
  it('generate', () => {
    expect(component).toBeTruthy();
  });
});

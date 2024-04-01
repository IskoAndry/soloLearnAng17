import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TebleComponent } from './teble.component';

describe('TebleComponent', () => {
  let component: TebleComponent;
  let fixture: ComponentFixture<TebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TebleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

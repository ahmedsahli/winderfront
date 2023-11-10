import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadwordRecComponent } from './badword-rec.component';

describe('BadwordRecComponent', () => {
  let component: BadwordRecComponent;
  let fixture: ComponentFixture<BadwordRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadwordRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadwordRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

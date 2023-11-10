import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBadwordRecComponent } from './add-badword-rec.component';

describe('AddBadwordRecComponent', () => {
  let component: AddBadwordRecComponent;
  let fixture: ComponentFixture<AddBadwordRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBadwordRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBadwordRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

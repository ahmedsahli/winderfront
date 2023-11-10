import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReclamationFComponent } from './details-reclamation-f.component';

describe('DetailsReclamationFComponent', () => {
  let component: DetailsReclamationFComponent;
  let fixture: ComponentFixture<DetailsReclamationFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReclamationFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReclamationFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

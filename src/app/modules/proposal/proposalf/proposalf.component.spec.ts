import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalfComponent } from './proposalf.component';

describe('ProposalfComponent', () => {
  let component: ProposalfComponent;
  let fixture: ComponentFixture<ProposalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

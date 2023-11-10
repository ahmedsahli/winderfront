import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationUserComponent } from './reclamation-user.component';

describe('ReclamationUserComponent', () => {
  let component: ReclamationUserComponent;
  let fixture: ComponentFixture<ReclamationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

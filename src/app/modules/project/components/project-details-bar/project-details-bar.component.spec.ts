import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsBarComponent } from './project-details-bar.component';

describe('ProjectDetailsBarComponent', () => {
  let component: ProjectDetailsBarComponent;
  let fixture: ComponentFixture<ProjectDetailsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDetailsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

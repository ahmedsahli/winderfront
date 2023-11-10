import { Component } from '@angular/core';

@Component({
  selector: 'winder-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  selectedValues!: String[];

  ngOnInit(): void {
    console.log('ProjectComponent');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'winder-project-details-bar',
  templateUrl: './project-details-bar.component.html',
  styleUrls: ['./project-details-bar.component.scss']
})
export class ProjectDetailsBarComponent {
  @Input() project!: any;

  DevCheck: any;

  ngOnInit() {
    this.DevCheck = localStorage.getItem('role1');
    console.log(this.DevCheck);
  }
}

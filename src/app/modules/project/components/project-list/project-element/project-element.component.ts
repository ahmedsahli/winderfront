import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'winder-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent {
  @Input() project: any;
  username!: string;

  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.project);
  }

  redirect() {
    this.router.navigate(['/project/reclamation']);
  }

  showProjectDetails = false;
}

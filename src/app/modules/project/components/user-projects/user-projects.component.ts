import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';

@Component({
  selector: 'winder-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss']
})
export class UserProjectsComponent {
  products!: any[];
  visible!: boolean;
  projects!: Observable<any>;
  showDialog() {
    this.visible = true;
  }

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.loadProjects();
    console.log(this.projects);
  }

  loadProjects() {
    this.projects = this.projectService.getProjectById(localStorage.getItem('email'));
    this.projectService.getProjectById(localStorage.getItem('email')).subscribe((data) => {
      console.log(data);
    });
  }
  delete(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }

  payUser() {
    this.router.navigate(['/project/pay-user']);
  }
}

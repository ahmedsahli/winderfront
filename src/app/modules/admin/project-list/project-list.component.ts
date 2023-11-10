import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProjectService } from 'src/app/shared/services/admin/admin-project.service';
import { ProjectService } from 'src/app/shared/services/project/project.service';

@Component({
  selector: 'winder-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  products!: any[];
  visible!: boolean;
  projects!: Observable<any>;
  showDialog() {
    this.visible = true;
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
    console.log(this.projects);
  }

  loadProjects() {
    this.projects = this.projectService.getAllProjects();
    this.projectService.getAllProjects().subscribe((data) => {
      console.log(data);
    });
  }
  delete(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }
}

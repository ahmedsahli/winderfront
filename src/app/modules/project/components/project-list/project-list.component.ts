import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { SkillService } from 'src/app/shared/services/project/skill.service';
import {UserService} from "../../../../shared/user.service";


@Component({
  selector: 'winder-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  project_duration!: string;
  projects_net_result: any;
  projects: any;
  skills!: Observable<any>;
  sidebarVisible1 = false;
  currentDate = new Date();
  filters = {
    duration: '',
    experience: '',
    project: '',
    title: '',
    skills: [],
    budgetFrom: null,
    budgetTo: null
  };
  constructor(private ps: ProjectService, private ss: SkillService, private userservice: UserService) {}

  ngOnInit(): void {
    this.skills = this.ss.getAllSkills();
    this.ps.getAllProjects().subscribe((res: any) => {
      console.log(res);
      this.projects_net_result = res;
      this.projects = res;
    });
  }



  logout()
  {
    this.userservice.logoutUser();
  }






  onFilterChange() {
    this.filters = { ...this.filters };

    console.log(this.filters);
  }

  experiences = [
    {
      label: 'Entry',
      value: 'entry'
    },
    {
      label: 'Intermediate',
      value: 'Intermediate'
    },
    {
      label: 'Expert',
      value: 'Expert'
    },
    { label: 'All Experiences', value: '' }
  ];
  durations = [
    {
      label: 'More than 6 months',
      value: 'more than 6 months'
    },
    {
      label: '3 to 6 months',
      value: '3 to 6 months'
    },
    {
      label: '1 to 3 months',
      value: '1 to 3 months'
    },
    { label: 'All Durations', value: '' }
  ];
}

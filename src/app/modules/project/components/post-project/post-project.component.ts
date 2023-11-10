import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EditPostModalComponent } from './edit-post-modal/edit-post-modal.component';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/shared/services/project/skill.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'winder-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.scss'],
  providers: [DialogService]
})
export class PostProjectComponent implements OnInit {
  skills!: Observable<any>;
  ref!: DynamicDialogRef;
  constructor(private fb: FormBuilder, public dialogService: DialogService, private ps: ProjectService, private router: Router, private ss: SkillService) {}
  ngOnInit(): void {
    this.initPostForm();
    this.initChart();
    this.skills = this.ss.getAllSkills();
    this.skills.subscribe((res: any) => {
      console.log(res);
    });
  }
  initPostForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      skills: ['', Validators.required],
      scope: ['', Validators.required],
      budgetFrom: [20, Validators.required],
      budgetTo: [50, Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      experience: ['', Validators.required],
      file: [null]
    });
  }

  postForm!: FormGroup;
  step = 1;
  progress = 20;
  stepLabel = ['Headline', 'Skills', 'Scope', 'Budget', 'Description', 'Review'];
  leftPanelHeader = [
    'Write a title for your job post',
    'What are the main skills required for your work?',
    'Next, estimate the scope of your work.',
    'Tell us about your budget.',
    'Last step, start the conversation'
  ];
  rightPanelHeader = ['What is the title of your job post?', 'What skills are required for your work?', '', '', 'Describe your project'];

  leftPanelContent = [
    'This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!',
    '',
    'Consider the size of your project and the time it will take.',
    'This will help us match you to talent within your range.'
  ];

  skillsExample = [
    'angular',
    'react',
    'nest',
    'dino',
    'node',
    'java',
    'python',
    'c++',
    'c#',
    'c',
    'php',
    'ruby',
    'swift',
    'kotlin',
    'go',
    'rust',
    'scala',
    'sql',
    'nosql',
    'mongodb',
    'mysql',
    'postgresql',
    'oracle',
    'sqlite',
    'redis',
    'memcached',
    'cassandra',
    'docker',
    'kubernetes',
    'jenkins',
    'travis',
    'circleci',
    'git',
    'github',
    'bitbucket',
    'gitlab'
  ];

  scopes = [
    {
      label: 'Large',
      description: 'Longer term or complex initiatives (ex. setup day-to-day processes to manage projects and operations)'
    },
    {
      label: 'Medium',
      description: 'Well-defined projects (ex. update and maintain CRM records for the sales team)'
    },
    {
      label: 'Small',
      description: 'Quick and straightforward tasks (ex. build a contact list from web research)'
    }
  ];

  durations = [
    {
      label: 'More than 6 months'
    },
    {
      label: '3 to 6 months'
    },
    {
      label: '1 to 3 months'
    }
  ];

  experiences = [
    {
      label: 'Entry',
      description: 'Looking for someone relatively new to this field'
    },
    {
      label: 'Intermediate',
      description: 'Looking for substantial experience in this field'
    },
    {
      label: 'Expert',
      description: 'Looking for comprehensive and deep expertise in this field'
    }
  ];

  formGroupNames = ['title', 'skills', 'scope', 'budgetTo', 'description'];

  data: any;

  options: any;
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['20', '25', '30', '40', '50'],
      datasets: [
        {
          label: 'Hourly Rate (TND)',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          borderColor: documentStyle.getPropertyValue('--green-500'),
          data: ['10', 30, 40, 8, 7, 5]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  editorConfig: AngularEditorConfig = {
    enableToolbar: false,
    showToolbar: false,
    editable: true
  };
  editRadio(fromGroupName: string) {
    this.postForm.controls[fromGroupName].setValue('');
  }
  setStepForward() {
    this.step++;
    this.progress = this.progress + 20;
  }

  setStepBack() {
    this.step--;
    this.progress = this.progress - 20;
  }
  isMessageTooShort() {
    return this.postForm.controls['description'].value.length < 50;
  }
  editModal(param: any) {
    console.log(param);

    this.ref = this.dialogService.open(EditPostModalComponent, {
      header: 'Edit ' + param,
      width: '40%',
      height: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { data: this.postForm.controls[param].value, param: param }
    });

    this.ref.onClose.subscribe((result: any) => {
      if (result) {
        this.postForm.get(param)?.setValue(result);
      }
    });
  }

  postProject() {
    const email = localStorage.getItem('email')?.toString();
    console.log(localStorage.getItem('email'));

    const body = {
      title: this.postForm.controls['title'].value,
      skills: this.postForm.controls['skills'].value,
      scope: this.postForm.controls['scope'].value,
      budgetFrom: this.postForm.controls['budgetFrom'].value,
      budgetTo: this.postForm.controls['budgetTo'].value,
      description: this.postForm.controls['description'].value,
      duration: this.postForm.controls['duration'].value,
      experience: this.postForm.controls['experience'].value
    };
    console.log(body, email);
    this.ps.postProject(body, email).subscribe(() => {
      this.router.navigate(['/project']);
    });
  }
}

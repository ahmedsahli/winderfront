import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { SkillService } from 'src/app/shared/services/project/skill.service';

@Component({
  selector: 'winder-edit-post-modal',
  templateUrl: './edit-post-modal.component.html',
  styleUrls: ['./edit-post-modal.component.scss']
})
export class EditPostModalComponent {
  field: string = '';
  data: any;
  skillList!: Observable<any>;
  postForm!: FormGroup;

  constructor(private config: DynamicDialogConfig, private fb: FormBuilder, public ref: DynamicDialogRef, private ss: SkillService) {
    this.skillList = this.ss.getAllSkills();

    this.field = this.config.data.param;
    this.data = this.config.data.data;
  }

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

  ngOnInit(): void {
    console.log(this.data);

    this.initPostForm();
  }

  updatePost() {
    this.ref.close(this.postForm.get(this.field)?.value);
  }
  initPostForm() {
    if (this.data != null) {
      this.postForm = this.fb.group({
        title: [this.data, Validators.required],
        skills: [this.data, Validators.required],
        scope: [this.data, Validators.required],
        budgetFrom: [this.data, Validators.required],
        budgetTo: [this.data, Validators.required],
        description: [this.data, Validators.required],
        duration: [this.data, Validators.required],
        experience: [this.data, Validators.required],
        file: [null]
      });
    }
  }
  editRadio(fromGroupName: string) {
    this.postForm.controls[fromGroupName].setValue('');
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ProfileComponent } from './modules/profile/profile.component';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'WINDER_FRONT';
  items!: any[];

  constructor(public router: Router, private dialogService: DialogService, private userservice: UserService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'My projects',
        icon: 'pi pi-fw pi-telegram',
        routerLink: '/project/user-projects'
      },
      {
        label: 'Projects List',
        icon: 'pi pi-fw pi-list',
        routerLink: '/project'
      },
      {
        label: 'Add Project',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/project/post-project'
      },

      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        command: () => (this.visible = true)
      },
      {
        label: 'Reclamations',
        icon: 'pi pi-fw pi-minus-circle',
        routerLink: '/project/reclamations'
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.userservice.logoutUser()
      }
    ];
  }

  name = localStorage.getItem('nom');
  prenom = localStorage.getItem('prenom');
  email = localStorage.getItem('email');
  visible!: boolean;

  showDialog() {
    this.visible = true;
  }
  showProfileDialog() {
    const ref = this.dialogService.open(ProfileComponent, {
      header: 'My Profile',
      width: '300px',
      closable: true
    });
  }
}

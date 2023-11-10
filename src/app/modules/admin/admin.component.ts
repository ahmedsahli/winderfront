import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'winder-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}
  items!: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: '/admin/dashboard'
      },
      {
        label: 'Test',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'New Test',
            icon: 'pi pi-fw pi-plus-circle',
            routerLink: '/admin/add-test'
          },
          {
            label: 'Tests List',
            icon: 'pi pi-fw pi-list',
            routerLink: '/admin/list-test'
          }
        ]
      },
      {
        label: 'Projects List',
        icon: 'pi pi-fw pi-file-edit',
        routerLink: '/admin/projects-list'
      },
      {
        label: 'Reclamation',
        icon: 'pi pi-fw pi-minus-circle',
        routerLink: '/admin/reclamation'
      },
      {
        label: 'Badword',
        icon: 'pi pi-fw pi-minus-circle',
        routerLink: '/admin/badword-rec'
      },

      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            routerLink: '/admin/users-list',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Users Chart',
                    icon: 'pi pi-fw pi-chart-line',
                    routerLink: '/admin/users-pie'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Meeting',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/admin/meetings'
      },
      {
        separator: true
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        routerLink: '/auth/login'
      }
    ];
  }
}

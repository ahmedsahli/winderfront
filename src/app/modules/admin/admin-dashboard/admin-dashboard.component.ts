import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'winder-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  data: any;
  dataRadar: any;
  nProjects!: number;
  nUsers!: any;
  options: any;
  optionsRadar: any;
  clientUsers!: number;
  devUsers!: number;
  nReclamation!: number;
  numberOfProjectsSinceLastVisit!: number;

  constructor(private ps: ProjectService, private us: UserService, private rs: ReclamationService) {}

  test() {
    const documentStyle1 = getComputedStyle(document.documentElement);
    const textColor = documentStyle1.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle1.getPropertyValue('--text-color-secondary');

    this.dataRadar = {
      labels: ['Web Dev', 'Cloud', 'Mobile Dev', 'UI/UX', 'Desktop Apps', 'Devops', 'System Admin'],
      datasets: [
        {
          label: 'Clients',
          borderColor: documentStyle1.getPropertyValue('--bluegray-400'),
          pointBackgroundColor: documentStyle1.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle1.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle1.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'Freelancers',
          borderColor: documentStyle1.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle1.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle1.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle1.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    this.optionsRadar = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary
          },
          pointLabels: {
            color: textColorSecondary
          }
        }
      }
    };
  }

  ngOnInit() {
    this.ps.countProjects().subscribe((res) => {
      this.nProjects = res;
      console.log();
    });

    this.rs.nombresReclamationAujourdhui().subscribe((res) => {
      this.nReclamation = res;
      console.log(this.nReclamation);
    });
    this.us.getusers().subscribe((res) => {
      this.nUsers = res;
      const usersArray = Object.values(res);
      console.log(usersArray);

      this.clientUsers = usersArray.filter((user) => user.role1 === 'Client').length;
      this.devUsers = usersArray.filter((user) => user.role1 === 'Devloppeur').length;
      console.log(this.clientUsers);
      console.log(this.devUsers);
    });
    this.test();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Number of jobs',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
        },
        {
          type: 'bar',
          label: 'Clients',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: 'white',
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Freelancers',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          data: [41, 52, 24, 74, 23, 21, 32]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
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
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
}

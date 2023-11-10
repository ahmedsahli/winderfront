import { Component,OnInit,AfterViewInit,ElementRef,ViewChild} from '@angular/core';
import {Chart, ChartType} from "chart.js";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../shared/user.service";

@Component({
  selector: 'winder-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements  OnInit,AfterViewInit{
  @ViewChild('myChart', { static: false }) myChart!: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // ...
  }

  ngAfterViewInit(): void {
    this.userService.countUsersByRole().subscribe((data) => {
      const myChart = new Chart(this.myChart.nativeElement, {
        type: 'pie',
        data: {
          labels: ['Admin', 'Developer', 'Client', 'Enterprise'],
          datasets: [
            {
              data: Object.values(data),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    });
  }

// end
}

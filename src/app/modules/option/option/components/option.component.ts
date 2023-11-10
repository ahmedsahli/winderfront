import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Option } from '../../option';
import { OptionService } from '../../Option.service';

@Component({
  selector: 'winder-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {

  public options: Option[] = [];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private optionService: OptionService){}

  ngOnInit() {
    this.getOptions();
  }

  public getOptions(): void {
    this.optionService.getOptions().subscribe(
      (response: Option[]) => {
        this.options = response;
        console.log(this.options);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

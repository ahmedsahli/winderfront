import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Question } from '../../question/question';
import { Test } from '../test';

@Component({
  selector: 'winder-redirect-to-test',
  templateUrl: './redirect-to-test.component.html',
  styleUrls: ['./redirect-to-test.component.scss']
})
export class RedirectToTestComponent implements OnInit {
  tests!: Test[];
  randomParam!: number;
  constructor(private route: ActivatedRoute, private router: Router, 
    private testService: TestService){
  }
matchingId!: number[];

  ngOnInit() {
    this.testService.getTests().subscribe((response: Test[]) => {
      this.matchingId = response.map((test) => test.test_id);
      console.log(this.tests);
      });
  }

  gotoTest() {
    
    do {
     this.randomParam = Math.floor(Math.random() * 100);
    } while (!this.matchingId.includes(this.randomParam) );
    
    this.testService.getTestQuestions(this.randomParam).subscribe((questions: Question[]) => {
      // Process the retrieved questions as needed
      
      console.log(questions);

      // Redirect to a different route if needed
       this.router.navigate(["tests/"+this.randomParam+"/questions"])
       
       
    });
  }
}

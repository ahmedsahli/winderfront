import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../question';
import { QuestionService } from '../../question.service';
import { Option } from 'src/app/modules/option/option';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from 'src/app/modules/option/Option.service';
import { gsap } from 'gsap';



@Component({
  selector: 'winder-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;
  @ViewChild('questionContainer', { static: true })
  questionContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('answer', { static: true }) answer!: ElementRef<HTMLDivElement>;
  @ViewChild('main', { static: true }) main!: ElementRef<HTMLDivElement>;
  @ViewChild('actions', { static: true }) actions!: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress!: ElementRef<HTMLDivElement>;
  
  questions: Question[] = [];
  options!: Option[];
  score: number =0;
  currentQuestionIndex = 0;
  progressValue!: number;
  answerForm!: FormGroup;
  answerElements: HTMLDivElement[] = [];
  selectedAnswer!: string;
  postForm!: FormGroup;
  items!: any[] ;
  position: string = 'top';
  selectedOption!: Option;
  answeredCorrectly = false;
  questionId!: number;
  isLastQuestion!: boolean;
  timer:any;

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];
  
  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private questionService: QuestionService,
    private optionService: OptionService,
    private cdr: ChangeDetectorRef,
    
    ){
      this.answerForm = new FormGroup({
        answer: new FormControl('')
      });
    }

  ngOnInit() {
    this.getQuestions();
    this.InitDock();
    this.optionService.getOptions().subscribe((options)=>{
      this.options=options;
      console.log(this.options);
    })
    this.initAnimations();
    this.increaseProgressValue();
    this.answerElements = Array.from(this.answer.nativeElement.querySelectorAll('.answer-option'));
   
  }


  initAnimations() {
    gsap.from(this.main.nativeElement, {
      delay: 0.2,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
    gsap.from(this.questionContainer.nativeElement.childNodes, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    gsap.from(this.actions.nativeElement.childNodes, {
      delay: 0.6,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
    gsap.from(this.progress.nativeElement.childNodes, {
      delay: 0.7,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
  }


  InitDock() {
    this.items = [
      {
          label: 'Finder',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
      },
      {
          label: 'App Store',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
      },
      {
          label: 'Photos',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
      },
      {
          label: 'Trash',
          icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
      }
  ];
  }

  increaseProgressValue(): void {
    this.progressValue =
      (100 * (this.currentQuestionIndex + 1)) / this.questions.length;
    if (this.currentQuestionIndex === 0) {
      gsap.to(this.slider.nativeElement, {
        delay: 0.7,
        duration: 0.6,
        width: `${this.progressValue}%`,
      });
    } else {
      gsap.to(this.slider.nativeElement, {
        duration: 0.6,
        width: `${this.progressValue}%`,
      });
    }
  }



  goToNextQuestion(): void{
    if (this.currentQuestionIndex < this.questions.length - 1) {
      gsap.to(this.questionContainer.nativeElement.childNodes, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15,
        onComplete: () => {
          this.currentQuestionIndex++;
          this.increaseProgressValue();
          this.cdr.detectChanges();
          gsap.to(this.questionContainer.nativeElement.childNodes, {
            duration: 0.4,
            opacity: 1,
            y: 0,
            stagger: 0.2,
          });
        },
      });
    }else if (this.currentQuestionIndex === this.questions.length -1) {
      this.isLastQuestion = true;
    }
  }

  finishQuiz() {
    this.router.navigate(['/question/finish']);
  }
  

 /* prev(): void {
    if (this.currentQuestionIndex > 0) {
      gsap.to(this.questionContainer.nativeElement.childNodes, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15,
        onComplete: () => {
          if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.increaseProgressValue();
            this.cdr.detectChanges();
            gsap.to(this.questionContainer.nativeElement.childNodes, {
              duration: 0.4,
              opacity: 1,
              y: 0,
              stagger: 0.15,
            });
          }
        },
      });
    }
  }
*/
  

  public getQuestions(): void {
    this.questionService.getQuestions().subscribe(
      (response: Question[]) => {
        this.questions = response;
        this.timer = this.questions.length * 1 * 60;
        console.log(this.questions);
        this.startTimer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  get question(): Question {
    return this.questions[this.currentQuestionIndex];
  }


  onSelect(answer: HTMLDivElement): void{
    (this.answer.nativeElement.childNodes as NodeListOf<HTMLDivElement>).forEach((node: HTMLDivElement) => {
      if (node.classList && node.classList.contains('selected')) {
        node.classList.remove('selected');
      }
    });
    answer.classList.add('selected');
    const selectedAnswer = answer.innerText.trim(); // get the selected answer as a string
    this.answerForm.get('answer')!.setValue(selectedAnswer); // set the value of the answer form control
   
    if (selectedAnswer !== this.selectedAnswer ) { //check if option is already selected, if no : continue 
      this.selectedAnswer = selectedAnswer; // Update the selected answer and recalculate the score
      this.calculateScore();
      this.goToNextQuestion(); 
    }
    
    
  }

  calculateScore() {
    for (let question of this.questions) {
      if (question.correct_option === this.selectedAnswer) {
        this.score++ ;
      }
    }
  }

  startTimer(){
    let t = window.setInterval(()=>{
      if (this.timer <= 0){
        this.finishQuiz();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer /60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }
  
  

 
  

}

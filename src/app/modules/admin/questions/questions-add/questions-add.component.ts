import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { Option, Question } from 'src/app/modules/shared-module/models/question.model';
import { QuestionsCrudService } from '../../shared/services/questions-crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions-add',
  templateUrl: './questions-add.component.html',
  styleUrls: ['./questions-add.component.css']
})
export class QuestionsAddComponent implements OnInit {
  addForm!: FormGroup;
  technologies: Technology[] = [];
  optionsArray: Option[] = [];
  addOptionClicked: number = 0;
  btnDisabled: boolean = false;
  addRequest!: Question;
  optionsCount: number = 0;
  experienceLevels = [
    'Beginner',
    'Intermediate',
    'Experienced'
  ];
  alphabets: string[] = [];
  optCounts!: FormGroup;

  constructor(
    private title: Title,
    private router: Router,
    private fb: FormBuilder,
    private techService: TechnologyService,
    private questionService: QuestionsCrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.title.setTitle('Add Question');
    this.techService.getAllTechnologies().subscribe({
      next: (res) => {
        this.technologies = res.response;
      }
    });
    this.addForm = this.fb.group({
      createdBy: new FormControl(''),
      createdOn: new FormControl('2023-04-06T06:20:50.021Z'),
      modifiedBy: new FormControl(''),
      lastModifiedOn: new FormControl('2023-04-06T06:20:50.021Z'),
      id: new FormControl(0),
      technologyId: new FormControl('', [Validators.required]),
      experienceLevelId: new FormControl('', [Validators.required]),
      questionName: new FormControl('', [Validators.required]),
      marks: new FormControl(1, [Validators.required]),
      timeSlot: new FormControl(1, [Validators.required]),
      isActive: new FormControl(true, [Validators.required]),
      options: this.fb.array([])
    });
    this.optCounts = this.fb.group({
      optionsCount: new FormControl('')
    })

  }

  //FormFroup for creating the option object
  newOption(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      questionId: new FormControl(0),
      questionOptionName: new FormControl(''),
      questionLabelOption: new FormControl(''),
      createdBy: new FormControl(''),
      createdOn: new FormControl('2023-04-06T06:20:50.021Z'),
      modifiedBy: new FormControl(''),
      lastModifiedOn: new FormControl('2023-04-06T06:20:50.021Z'),
      correctAnswer: new FormControl(false),
    })
  }

  //When user clicks on Add Option button, this function is called
  //which pushes the current option in form array
  addOption() {
    //debugger
    this.optCounts.reset();

    for (let i = 0; i < this.optionsCount; i++) {
      this.options().push(this.newOption());
    }

    //this.createDropdown();
  }

  getOptionsCount(arg: any) {
    this.optionsCount = Number(arg.target.value);
  }

  // createDropdown() {
  //   //debugger;
  //   for (let i = 0; i < this.optionsCount; i++) {
  //     this.alphabets.push(String.fromCharCode(65 + i));
  //   };
  //   console.log(this.alphabets);
  // }

  removeOption(index: number) {
    this.options().removeAt(index);
  }

  //Function called o clicking submit button, which sends the current question to api
  submitAddForm() {
    //console.log(this.addForm.value);
    this.addForm.markAllAsTouched();
    if (this.addForm.valid) {
      this.addRequest = this.addForm.value;
      this.questionService.addNewQuestion(this.addRequest).subscribe({
        next: (res) => {
          if (res.isSuccess == true) {
            this.toastr.success('Question Added Successfully!', 'Success!', {
              timeOut: 2000,
            });
            this.router.navigate(['/questions-list']);
          } else {
            this.toastr.error('Question Not Added!', 'Failure', {
              timeOut: 2000,
            });
            //console.log(res);
          }
        }
      })
    }
  }

  // getter functions to get formcontrols of the form
  get technologyId(): FormControl {
    return this.addForm.get("technologyId") as FormControl;
  }

  get questionName(): FormControl {
    return this.addForm.get("questionName") as FormControl;
  }

  get experienceLevelId(): FormControl {
    return this.addForm.get("experienceLevelId") as FormControl;
  }

  // get marks(): FormControl {
  //   return this.addForm.get("marks") as FormControl;
  // }

  // get timeSlot(): FormControl {
  //   return this.addForm.get("timeSlot") as FormControl;
  // }

  get isActive(): FormControl {
    return this.addForm.get("isActive") as FormControl;
  }

  get questionOptionName(): FormControl {
    return this.addForm.get("questionOptionName") as FormControl;
  }

  get questionLabelOption(): FormControl {
    return this.addForm.get("questionLabelOption") as FormControl;
  }

  get correctAnswer(): FormControl {
    return this.addForm.get("correctAnswer") as FormControl;
  }

  options(): FormArray {
    return this.addForm.get("options") as FormArray;
  }

  get count(): FormControl {
    return this.optCounts.get("optionsCount") as FormControl;
  }
}

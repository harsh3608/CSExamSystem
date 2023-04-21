import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { Option, Question } from 'src/app/modules/shared-module/models/question.model';
import { QuestionsCrudService } from '../../shared/services/questions-crud.service';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions-update',
  templateUrl: './questions-update.component.html',
  styleUrls: ['./questions-update.component.css']
})
export class QuestionsUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  updateRequest!: Question;
  technologies: Technology[] = [];
  optionsArray: Option[] = [];
  addOptionClicked: number = 0;
  btnDisabled: boolean = false;
  question!: Question;
  optionsCount!: number;
  isLoading:boolean=false;
  qId!:number;
  experienceLevels = [
    'Beginner',
    'Intermediate',
    'Expert'
  ];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private techService: TechnologyService,
    private questionService: QuestionsCrudService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.title.setTitle('Update Question');
    this.techService.getAllTechnologies().subscribe({
      next: (res) => {
        this.technologies = res.response;
      }
    });
    this.updateForm = this.fb.group({
      id: new FormControl(''),
      technologyId: new FormControl(null, [Validators.required]),
      experienceLevelId: new FormControl(''),
      questionName: new FormControl('', [Validators.required]),
      marks: new FormControl(1, [Validators.required]),
      timeSlot: new FormControl(1, [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
      createdBy: new FormControl(''),
      createdOn: new FormControl(''),
      modifiedBy: new FormControl(''),
      lastModifiedOn: new FormControl(''),
      options: this.fb.array([])
    })

    this.route.paramMap.subscribe({
      next: (params) => {
        //const id = params.get('id');
        this.route.snapshot.params['id'];
        if (this.route.snapshot.params['id']) {
          setTimeout(() => {
            this.questionService.getQuestionsById(this.route.snapshot.params['id']).subscribe({
              next: (res) => {
                res.response.options.forEach(element=> {
                  this.addOption();
                });
                this.question = res.response;
                this.qId = this.question.id;
                this.updateForm.patchValue(this.question);
              }
            });
            this.isLoading=false;
          }, 1000);

        }
      }
    })

  }

  //FormFroup for creating the option object
  newOption(): FormGroup {
    return this.fb.group({
      id: new FormControl(0),
      questionId: new FormControl(this.qId),
      questionOptionName: new FormControl('',),
      questionLabelOption: new FormControl('',),
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
    this.addOptionClicked++;
    this.getOptions().push(this.newOption());
  }


  removeOption(index:number) {
    this.getOptions().removeAt(index);
  }

  //Function to be called when user clicks update button, which further calls api
  submitUpdateForm() {
    console.log("update request " + this.updateForm.value);
    this.updateForm.markAllAsTouched();
    if (this.updateForm.valid) {
      this.updateRequest = this.updateForm.value;
      this.questionService.updateQuestion(this.updateRequest).subscribe({
        next: (res) => {
          if (res.isSuccess) {
            this.toastr.success('Question Updated Successfully!', 'Success!',{
              timeOut: 2000,
            });
            this.router.navigate(['/questions-list'])
          } else {
            this.toastr.error('Question Not Updated!', 'Failure', {
              timeOut: 2000,
            });
          }
        }
      })
    }
  }

  // getter functions to get formcontrols of the form
  get technologyId(): FormControl {
    return this.updateForm.get("technologyId") as FormControl;
  }

  get questionName(): FormControl {
    return this.updateForm.get("questionName") as FormControl;
  }

  get experienceLevelId(): FormControl {
    return this.updateForm.get("experienceLevelId") as FormControl;
  }

  // get marks(): FormControl {
  //   return this.updateForm.get("marks") as FormControl;
  // }

  // get timeSlot(): FormControl {
  //   return this.updateForm.get("timeSlot") as FormControl;
  // }

  get isActive(): FormControl {
    return this.updateForm.get("isActive") as FormControl;
  }

  get questionOptionName(): FormControl {
    return this.updateForm.get("questionOptionName") as FormControl;
  }

  get questionLabelOption(): FormControl {
    return this.updateForm.get("questionLabelOption") as FormControl;
  }

  get correctAnswer(): FormControl {
    return this.updateForm.get("correctAnswer") as FormControl;
  }

  getOptions(): FormArray {
    return this.updateForm.get("options") as FormArray;
  }
}

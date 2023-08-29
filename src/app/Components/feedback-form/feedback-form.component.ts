import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  data={
    name:'',
    email:'',
    feedback:''

  } 
  constructor(){

  }

  ngOnInit(): void {
      
  }
  onFormSubmit(){
    console.log(this.data)
  }
}

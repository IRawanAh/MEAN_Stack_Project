import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  model={}
  userId: any = 0;
  formId:any = ""
  newSubmission:any={};

  constructor(private _user:UserService, private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let formId = this.route.snapshot.params["id"]
    console.log(formId)
    let observable = this._user.getForm(formId);
    observable.subscribe(data => {
      this.model=data[0]
      this.formId = data[0]._id
      for(let item of data[0].attributes){
        this.newSubmission[item.name]=""
      }
    })
    
  }
  toggleValue(item){
    item.selected = !item.selected;
  }
  
  onSubmit(){
    let observable = this._user.submitForm(this.newSubmission , this.formId);
    observable.subscribe(data => {
      console.log("Got the information from post data", data)
      // this.newSubmission = { title: "" }
    })
    console.log(this.newSubmission)
  }

}

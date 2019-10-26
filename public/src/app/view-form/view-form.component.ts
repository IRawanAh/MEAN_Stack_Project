import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  constructor(private _user:UserService, private _router:Router,private route:ActivatedRoute) { }
  model={}
  userId: any = 0;

  ngOnInit() {
    let formId = this.route.snapshot.params["id"]
    console.log(formId)
    let observable = this._user.getForm(formId);
    observable.subscribe(data => {
      this.model=data[0]
      console.log("Got the information from post data", this.model)
    })
  }

}

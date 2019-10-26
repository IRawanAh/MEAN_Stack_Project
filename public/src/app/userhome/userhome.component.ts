import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  // userId: any = 0;
  forms={}
  
  constructor(private _user:UserService, private _router:Router) {
    
   }


  ngOnInit() {
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrooooooottttteeeeerrrr",this._router.url);
    var userId: any = 0;
    this._user.getUser()
    .subscribe(
      data=>{userId = data; console.log(data);
      let observable = this._user.getForms(userId);
      observable.subscribe(data => {
        this.forms=data
      })
      } ,
      error=>this._router.navigate(['/login'])
    )
  
  }
  publish(id){
    window.open("http://localhost:3000/form/5db409eda68282468c08e795")
  }
  delete(formId){

    let observable = this._user.deleteForm(formId);
    observable.subscribe(data => {
      console.log("Got the information from post data", data)
    })
    this._router.navigate(['/home'])

  }

    


}

 

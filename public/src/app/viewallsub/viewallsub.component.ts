import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewallsub',
  templateUrl: './viewallsub.component.html',
  styleUrls: ['./viewallsub.component.css']
})
export class ViewallsubComponent implements OnInit {
  collection = [];
  model = {}
  subs = []
  qs = []
  ans = []
  labels = []
  result = []
  count = 0
  numpppp = "200"

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  setMyStyles(num, obj2) {
    console.log("ddddddiiiiiiiiiiiccccc", obj2, obj2.values)
    var sum = this.sum(obj2.values)
    var percernt=this.percernt(num,obj2)
    var color = "#f44336"
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",num / sum)
    if (percernt>= 25) {
      color = "#3f51b5"
    }
    if (percernt >= 50) {
      color = "#018786"
    }

    console.log("ssssssssuuuuuummmmmm", sum)
    let styles = {
      'background-color': color,
      'width': percernt + "%"
    };
    return styles;
  }

  percernt(num,obj2){
    var sum = this.sum(obj2.values)
   return Math.round( (num / sum )*100 ) 
  }
  
  sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }




  constructor(private _user: UserService, private _router: Router, private route: ActivatedRoute) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  ngOnInit() {
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrr", this._router.url);
    let formId = this.route.snapshot.params["id"]
    console.log(formId)
    let observable = this._user.getForm(formId);
    observable.subscribe(data => {
      this.model = data[0]
      this.subs = data[0].submissions
      this.qs = data[0].attributes
      this.count = data[0].submissions.length
      console.log("ssssssssssssssssss", this.subs)

      for (var i = 0; i < this.subs.length; i++) {
        var arr = Object.values(this.subs[i]);
        console.log("aaaarrrrrrrr", arr)
        var smallarr = []
        for (var j = 0; j < this.qs.length; j++) {
          console.log("llllllllllllllllllll", arr[j])
          smallarr.push([this.qs[j].label, arr[j]])
          //this.subs[i].key = this.qs[i];
        }
        this.ans.push(smallarr)
        console.log("mmmmmmmmmmmmm", smallarr)

      }
      console.log("annnnnnssswwww", this.ans)
      console.log("qssssssssssqqqqqqqqqqqqqqqqq", this.qs)

      console.log("Got the information from post data", this.subs)
      console.log("Got the information from post data", this.qs)



      for (var j = 0; j < this.qs.length; j++) {
        this.labels.push(this.qs[j].label)
      }

      this.result = [
        // {"type":"text",
        // "qss":"whaats your name?",
        // "text":["Sara", "Ghadeer", "rawan",]},

        // {"type":"radio",
        //   "qss":"Gender?",
        //   "values":{ "male 1":((10/this.count)*100),
        //       "female 2":((5/this.count)*100)
        // }

        // }
      ]
      for (var j = 0; j < this.qs.length; j++) {
        let dic = {}
        dic["type"] = this.qs[j].type
        dic["qss"] = this.qs[j].label

        if (this.qs[j].type == "radio" || this.qs[j].type == "autocomplete") {
          var values = {};
          for (var i = 0; i < this.qs[j].values.length; i++) {
            values[this.qs[j].values[i].label] = 0
          }
          for (var i = 0; i < this.subs.length; i++) {
            for (var a = 0; a < this.qs[j].values.length; a++) {
              if (this.subs[i][this.qs[j].name] == this.qs[j].values[a].value)
                values[this.qs[j].values[a].label] = values[this.qs[j].values[a].label] + 1
            }
          }
          dic["values"] = values
        } else {
          var text = [];

          for (var i = 0; i < this.subs.length; i++) {
            text.push(this.subs[i][this.qs[j].name])
          }

          dic["text"] = text
        }
        this.result.push(dic)
      }

      console.log("rrrrrrreeeeeessssssssss", this.result)
    })

  }
  length = 100;
  pageSize = 1;
  pageSizeOptions: number[] = [1];
  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
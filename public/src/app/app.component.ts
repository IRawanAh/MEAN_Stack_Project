import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formbuilder';
  constructor(private _router:Router) { }
  ngOnInit() {
  //  this._router.navigate(['/login']);
  }
}
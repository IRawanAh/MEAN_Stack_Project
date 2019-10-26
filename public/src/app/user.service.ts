import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post('http://127.0.0.1:3000/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getUser() {
    return this._http.get('http://127.0.0.1:3000/getUser', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  login(body: any) {
    return this._http.post('http://127.0.0.1:3000/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }



  // user(){
  //   return this._http.get('http://127.0.0.1:3000/user',{
  //     observe:'body',
  //     withCredentials: true,
  //     headers:new HttpHeaders().append('Content-Type','application/json')
  //   })
  // }

  logout() {
    return this._http.get('http://127.0.0.1:3000/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getForm(formId) {
    return this._http.get('http://127.0.0.1:3000/viewForm/'+formId);
  }
  deleteForm(formId) {
    return this._http.get('http://127.0.0.1:3000/deleteForm/'+formId);
  }
  getForms(userId) {
    return this._http.get('http://127.0.0.1:3000/getForms/'+userId);
  }

  addForm(newForm, userId) {
    console.log('this is userid:'+userId);
    return this._http.post('/new/form/'+userId, newForm)
  }
  submitForm(newSubmission, formId) {
    return this._http.post('/submitForm/'+formId, newSubmission)
  }
  addElement(newElement,formId) {
    return this._http.post('/new/element/'+formId, newElement)
  }
  
}

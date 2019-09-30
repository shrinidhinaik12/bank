import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
  this.signup = this.fb.group( {
    username: new FormControl(),
    password: new FormControl()
    // confirm: new FormControl()
  });
  }
  ngOnInit() {
  }
  open(values) {
    console.log(values);
    const body = {
      name: values.username,
      password: values.password,
      // confirmpassword: values.confirm
    };
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
        console.log('2', data);
      });
  }
}

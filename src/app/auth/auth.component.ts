import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [UserService]
})
export class AuthComponent implements OnInit {
  input;
  constructor(private userService: UserService, private router: Router) {
  }
  ngOnInit() {
    this.input = {
      username: '',
      password: '',
      email: ''
    };
  }
  registerUser() {
    this.userService.registerUser(this.input).subscribe(
      response => {
        alert('user ' + this.input.username + 'created');
      },
      error => console.log('error ', error)
    );
  }
  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('user ' + this.input.username + ' logged');
        this.router.navigate(['/cand']);
      },
      error => console.log('error ', error)
    );
  }
  ToForm() {
    this.router.navigate(['/candf']);
  }
}

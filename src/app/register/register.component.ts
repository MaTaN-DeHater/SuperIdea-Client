import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  errorText = '';
  hasError: boolean = false;
  fullName = '';
  type = 'student';
  userTypes = ['student', 'teacher'];

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService
      .register(
        this.email,
        this.password,
        this.fullName,
        this.type
      )
      .subscribe(
        (res) => {
          this.router.navigate(['/login']);
        },
        (error) => alert('error register')
      );
  }

  private emailCorrect(email: any) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

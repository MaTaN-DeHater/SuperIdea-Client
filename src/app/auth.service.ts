import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api';
  private onLoggedIn = new Subject();
  public onLoggedIn$ = this.onLoggedIn.asObservable();

  private onLoggedOut = new Subject();
  public onLoggedOut$ = this.onLoggedOut.asObservable();

  private onCartChanged = new Subject();
  public onCartChanged$ = this.onCartChanged.asObservable();

  constructor(private http: HttpClient, private  _router: Router) {
  }

  // @ts-ignore
  register(email, password, fullName, type) {
    return this.http.post(this.baseUrl + '/register', {email, password, fullName, type});
  }

  login(email: string, password: string) {
    return this.http.post(this.baseUrl + '/login', {email, password});
  }

  onUserLoggedIn(user: any) {
    this.onLoggedIn.next(user);
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user') as any);
    }
    return null;
  }


  logout() {
    localStorage.clear();
    this.onLoggedOut.next();
    this._router.navigate(['/login']);
  }


}

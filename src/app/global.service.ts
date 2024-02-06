import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {
  }

  getIdeas() {
    return this.http.get(this.baseUrl + '/ideas');
  }

  createIdeas(idea: any) {
    return this.http.post(this.baseUrl + '/ideas', idea);
  }

  like(idea: any) {
    return this.http.post(this.baseUrl + '/ideas/' + idea._id+'/like', idea);
  }
}

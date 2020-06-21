import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  url = 'https://api.github.com/users/';
  token = '9c25752408294763275dfde5fb37415cdc69cc7d';

  constructor(public http: HttpClient) {
   }
   getRepo(search:string): Observable<any> {
     return this.http.get(this.url + search + './repos?' + this.token)
   }
}

//for users
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { GithubUser } from './github-user';
import { SearchComponent } from './search/search.component';



@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  user: GithubUser[] = [];
  url = 'https://api.github.com/users/';
  token = '?access_token=9c25752408294763275dfde5fb37415cdc69cc7d';


  constructor(private http: HttpClient) { }

  searchMyUser(search: string){
    interface data {
      avatar: string;
      user: string;
      following: string;
      followers: string;
      forks: string;
      public_repo: string;
      bio: any;
      location: any;
      company: any;
    }
    return new Promise((resolve, reject) => {
      this.user = [];
      this.http.get<data>(this.url + search + this.token).toPromise().then(
        (results) => {
          this.user.push(results);
          resolve();
        },
        (error) => {
          reject();
        }
      );
    }); 
  }
}

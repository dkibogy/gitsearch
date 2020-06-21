import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../github-user';
import { GitServiceService } from '../git-service.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: GithubUser[];
  


  constructor(private service: GitServiceService) { }
  getSearchedUser(search) {
    this.service.searchMyUser(search).then(
      (success) => {
        this.user = this.service.user;
        console.log(this.user);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}

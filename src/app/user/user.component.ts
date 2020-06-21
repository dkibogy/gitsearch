import { Component, OnInit } from '@angular/core';
import { GithubUser } from '../github-user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: GithubUser[];
  


  constructor() { }
  

  ngOnInit(): void {
  }

}

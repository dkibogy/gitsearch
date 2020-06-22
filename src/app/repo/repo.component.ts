import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoServiceService } from '../repo-service.service';



@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  myRepo: Repo[];

  constructor(public reposerve: RepoServiceService) { }
  findRepo(search:string) {
    this.reposerve.findRepo(search).subscribe(data => {
      this.myRepo = data;
      console.log(this.myRepo)
    });
  }

  ngOnInit() {
    this.findRepo('dkibogy');
  }

}

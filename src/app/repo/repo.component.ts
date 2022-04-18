import { Component, OnInit } from '@angular/core';
import { Repo } from '../classes/repo';
import { MainService } from '../main.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repository!: Array<Repo>;

  constructor(public repoService:MainService, public userService:MainService) { }

  repositoryRequest(username:any){
    this.repoService.repositoryRequest(username).subscribe(res => {
      this.repository = res;
    });
  }

  ngOnInit(): void {
  }

}

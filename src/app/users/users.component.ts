import { Component, OnInit } from '@angular/core';
import { Repo } from '../classes/repo';
import { User } from '../classes/user';
import { MainService } from '../main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repo!: Array<Repo>;
  user!: User;
  
  constructor(public repoService:MainService, public userService:MainService) { }

  searchquerry(username: any) {
    this.userService.profileRequest(username).subscribe(res => {
      this.user = res;
    });
    this.repoService.repositoryRequest(username).subscribe(res => {
      this.repo = res;
    })
  }

  ngOnInit(): void {
    this.searchquerry('Williamsoditi')
  }
}

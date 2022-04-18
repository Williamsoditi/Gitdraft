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

  repository!: Array<Repo>;
  user!: User;
  
  constructor(public repoService:MainService, public userService:MainService) { }

  searchquery(username: any) {
    this.userService.profileRequest(username).subscribe(res => {
      this.user = res;
    });
    this.repoService.repoRequest(username).subscribe(res => {
      this.repository = res;
    })
  }

  ngOnInit(): void {
    this.searchquery('Williamsoditi');
  }
}

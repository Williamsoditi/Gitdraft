import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../classes/repo';
import { User } from '../classes/user';
import { MainService } from '../main.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  userProfile!: User;
  UserRepo!: Array<Repo>;
  repository!: Repo;
  searchForm: FormGroup = new FormGroup({
    "username": new FormControl("Williamsoditi", Validators.required),
  });


  constructor( private route: ActivatedRoute, private userService: MainService) { }

  searchResult(){
    let inputValue = this.searchForm.get('username')?.value;
    this.userService.profileRequest(inputValue).subscribe((res: User) => {
      this.userProfile = res;
    });
    this.userService.repoRequest(inputValue).subscribe((res:Array<Repo>) => {
      this.UserRepo = res;
    });
  }

  ngOnInit(): void {
    this.searchResult();
  }

}

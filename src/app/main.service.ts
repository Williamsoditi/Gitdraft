import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './classes/user';
import { Repo } from './classes/repo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  // Adds index property //
  username!:any;
  userRepo: any;
  userProfile: any;

  constructor(private http:HttpClient) {
    this.userProfile = new User ("","","","","",0,0,0,"",new Date);
    this.userRepo = new Repo ("","","",0,"",new Date, 0,"")
   }

   // Observable logic //

   profileRequest(username: string):Observable<User>{
    return this.http.get<User>(`https://api.github.com/users/${username}?client_id=${environment.clientId}&client_secret=${environment.apiKey}`);
  }

  repositoryRequest (username:string):Observable<Array<Repo>> {
    return this.http.get<Array<Repo>>(`https://api.github.com/users/${username}?client_id=${environment.clientId}&client_secret=${environment.apiKey}`)
  }

  
}

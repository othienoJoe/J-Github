import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  username:string;
  clientid!: '6e294d394a064777a345';
  clientsecret = '384d34bdc6fe15788f2e996301531360cf9257b6';

  constructor(private http:HttpClient) {
    console.log("Github service is now ready");
    this.username = 'othienoJoe';
  }

  getGithubInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(result => result));
  }

  getGithubRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(result => result));
  }

  updateProfile(username:string) {
    this.username = username;
  }
}

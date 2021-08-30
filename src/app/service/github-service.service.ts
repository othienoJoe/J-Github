import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {


  clientid!: '6e294d394a064777a345';
  clientsecret = '384d34bdc6fe15788f2e996301531360cf9257b6';

  constructor(private HttpClient:HttpClient) {
  }

  public getGithubInfo(username:string):Observable<any> {
    let profileURL=`https://api.github.com/users/${username}?client_id=${this.clientid}&client_secret=${this.clientsecret}`;

    return this.HttpClient.get<any>(profileURL).pipe(retry(1), catchError(this.errorHandler));
  }

  public getGithubRepos() {
    let profileURL=`https://api.github.com/users/${}}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`;

    return this.HttpClient.get<any>(profileURL).pipe(retry(1), catchError(this.errorHandler));
  }

  public errorHandler(error:HttpErrorResponse){
    let errMsg:string;
    if(error.error instanceof ErrorEvent){
      errMsg=`MESSAGE:${error.error.message}`
    }else{
      errMsg=`STATUS:${error.status} MESSAGE:${error.message}`
    }
    return throwError(errMsg)
  }
}

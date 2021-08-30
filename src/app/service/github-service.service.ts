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

  public getRepos(repos:any):Observable<any> {
    let profileURL=`https://api.github.com/users/${repos}/repos?client_id=${this.clientid}&client_secret=${this.clientsecret}`;

    return this.HttpClient.get<any>(profileURL).pipe(retry(1), catchError(this.errorHandler));
  }

  public errorHandler(error:HttpErrorResponse){
    let errMessage:string;
    if(error.error instanceof ErrorEvent){
      errMessage=`MESSAGE:${error.error.message}`
    }else{
      errMessage=`STATUS:${error.status} MESSAGE:${error.message}`
    }
    return throwError(errMessage)
  }
}

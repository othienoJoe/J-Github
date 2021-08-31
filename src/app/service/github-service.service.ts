import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  // Environment = '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'
  // clientid!: '6e294d394a064777a345';
  // clientsecret = '384d34bdc6fe15788f2e996301531360cf9257b6';

  constructor(private HttpClient:HttpClient) {

  }

  public getGithubInfo(username:any):Observable<any> {
    let profileURL=`https://api.github.com/users/${username}?access_token=${environment.apiKey}`;

    return this.HttpClient.get<any>(profileURL).pipe(retry(1), catchError(this.errorHandler));
  }

  public getRepos(username:any):Observable<any> {
    let profileURL=`https://api.github.com/users/${username}/repos?access_token=${environment.apiKey}`;

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

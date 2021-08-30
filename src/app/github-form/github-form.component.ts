import { Component, OnInit } from '@angular/core';
// import { GithubComponent } from '../github/github.component';
import { GithubServiceService } from '../service/github-service.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  public username: any;
  public githubProfile: any;
  public githubRepos: any;
  public errMessage: any;

  constructor(private githubService: GithubServiceService) { }

  findProfile() {
    this.githubService.getGithubInfo(this.username).subscribe(
      (github)=> {
        this.githubProfile = github;
      },
      (error) => {
        this.errMessage = error;
      }
    );

    this.githubService.getRepos(this.username).subscribe(
      (repos: any) => {
        this.githubRepos = repos;
      },
      (error: any) => {
        this.errMessage = error;
      }
    );
  }

  ngOnInit(): void {
  }

}

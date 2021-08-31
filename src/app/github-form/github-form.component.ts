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

  constructor(private githubServiceService: GithubServiceService) { }

  public findProfile() {
    this.githubServiceService.getGithubInfo(this.username).subscribe(
      (data)=> {
        this.githubProfile = data;
        console.log(this.githubProfile)
      },
      (error) => {
        this.errMessage = error;
      }
    );

    this.githubServiceService.getRepos(this.username).subscribe(
      (data) => {
        this.githubRepos = data;
      },
      (error) => {
        this.errMessage = error;
      }
    );
  }

  ngOnInit(): void {
  }

}

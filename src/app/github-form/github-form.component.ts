import { Component, OnInit } from '@angular/core';
// import { GithubComponent } from '../github/github.component';
import { GithubServiceService } from '../service/github-service.service';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  public profile: any;
  public repos: any;
  public username: any;

  constructor(private githubService: GithubServiceService) { }

  findProfile() {
    this.githubService.updateProfile(this.username);
    this.githubService.getGithubInfo().subscribe(github => {
      console.log(github);
      this.profile = this.profile;
    });

    this.githubService.getGithubRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit(): void {
  }

}

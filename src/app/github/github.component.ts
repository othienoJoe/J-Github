import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../service/github-service.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: any;
  repos: any;
  username!: string;

  constructor(private githubService: GithubServiceService) {

  }

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

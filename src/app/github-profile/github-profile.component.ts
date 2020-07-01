import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  submit()
  {
    this.router.navigate(['/followers'],{
      queryParams:{page:1,order:'newest'}
    });
  }
  ngOnInit() {
    let id=+(this.route.snapshot.paramMap.get('id'));
    console.log(id);
  
  }

}

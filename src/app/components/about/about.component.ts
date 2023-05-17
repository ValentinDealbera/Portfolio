import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  lenguage!: String
  ngOnInit() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lenguage: 'english'},
      queryParamsHandling: 'merge' // Merge with existing query parameters
    });
    this.route.queryParams.subscribe(params => {
      this.lenguage = params['lenguage'] // or use them as needed
    });
  }
}

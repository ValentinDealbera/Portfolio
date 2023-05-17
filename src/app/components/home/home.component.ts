import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() MyWorks = new EventEmitter<void>();
  @Output() HireMe = new EventEmitter<void>();

  triggerMyWorks() {
    this.MyWorks.emit();
  }
  triggerHireMe() {
    this.HireMe.emit();
  }
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

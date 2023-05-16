import { Component, EventEmitter, Output } from '@angular/core';

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
}

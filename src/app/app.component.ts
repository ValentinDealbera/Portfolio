import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Valentin Dealbera';
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  scrollToHome() {
    this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.dropdown = false
  }
  scrollToAbout() {
    const headerOffset = 45;
    const elementPosition = this.about.nativeElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ behavior: 'smooth', top: offsetPosition});
    this.dropdown = false
  }
  scrollToSkills() {
    const headerOffset = 45;
    const elementPosition = this.skills.nativeElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ behavior: 'smooth', top: offsetPosition});
    this.dropdown = false
  }
  scrollToProjects() {
    const headerOffset = 45;
    const elementPosition = this.projects.nativeElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ behavior: 'smooth', top: offsetPosition});
    this.dropdown = false
  }
  scrollToContact() {
    const headerOffset = 45;
    const elementPosition = this.contact.nativeElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ behavior: 'smooth', top: offsetPosition});
    this.dropdown = false
  }
  dropdown: Boolean = false
  setDropDown():void {
    this.dropdown = !this.dropdown
  }
}

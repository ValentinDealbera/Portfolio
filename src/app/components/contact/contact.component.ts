import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface Contact {
  name: String,
  img: String,
  link: String,
  text: String
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
  contacts: Contact[] = [
    {name: 'LinkedIn' ,img:'/assets/LinkedIn - Original.png', link:'https://www.linkedin.com/in/valentin-dealbera-b30561262/', text:'Valentin Dealbera'},
    {name: 'GitHub' ,img:'/assets/github.png', link:'https://github.com/ValentinDealbera', text:'ValentinDealbera'},
    {name: 'Gmail' ,img:'/assets/Gmail.png', link:'mailto:valentindealbera01@gmail.com?subject=Title&body=%20Send me a Messagge%2C%0D%0A%0D%0A', text:'valentindealbera01@gmail.com'},
    {name: 'Instagram' ,img:'/assets/Instagram - Original.png', link:'https://www.instagram.com/valedealbera/', text:'@valedealbera'}
  ]
}

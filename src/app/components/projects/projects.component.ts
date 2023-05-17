import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface Projects {
  name: String,
  descriptionEN: String,
  descriptionES: String,
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  link: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  lenguage!: String
activeDiv1: Boolean = false
toggleActive1(): void {
  this.activeDiv1 = !this.activeDiv1;
}
activeDiv2: Boolean = false
toggleActive2(): void {
  this.activeDiv2 = !this.activeDiv2;
}
  enterLink(link:string): void {
    window.open(link, '_blank');
  }
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?: any) {
    this.screenWidth = window.innerWidth;
  }
  projects: Projects[] = [
    {
      name: 'BeatConnect',
      descriptionEN: 'BeatConnect is a dynamic online marketplace where music makers and producers unite to effortlessly buy and sell beats. Our platform offers a payment gate with MercadoPago, third party authentication and more!.',
      descriptionES: 'BeatConnect es un mercado en línea dinámico donde los creadores y productores de música se unen para comprar y vender ritmos sin esfuerzo. ¡Nuestra plataforma ofrece una pasarela de pago con MercadoPago, autenticación de terceros y más!.',
      img1: '/assets/projects/BeatConnect/img1.png',
      img2: '/assets/projects/BeatConnect/img2.png',
      img3: '/assets/projects/BeatConnect/img3.png',
      img4: '/assets/projects/BeatConnect/img4.png',
      link: 'https://pf-beat-connect.vercel.app/landing'
    },
    {
      name: 'MyBuddy',
      descriptionEN: 'MyBuddy is a Single Page Application about dogs. The app allows users to search for a specific breed, filter results, and create a breed that is not in the dogs API. The app is based on the API from "https://api.thedogapi.com/"',
      descriptionES: 'MyBuddy es una aplicación de una sola página sobre perros. La aplicación permite a los usuarios buscar una raza específica, filtrar resultados y crear una raza que no se encuentra en la API de perros. La aplicación se basa en la API de "https://api.thedogapi.com/".',
      img1: '/assets/projects/MyBuddy/img1.png',
      img2: '/assets/projects/MyBuddy/img2.png',
      img3: '/assets/projects/MyBuddy/img3.png',
      img4: '/assets/projects/MyBuddy/img4.png',
      link: 'https://my-buddy-zeta.vercel.app/'
    },
    {
      name: 'RickApp',
      descriptionEN: "Discover RickApp, a Rick and Morty SPA! Explore 827 unique characters, find favorites, and dive into detailed character info. It's your go-to source for all things Rick and Morty!",
      descriptionES: "¡Descubre RickApp, una SPA de Rick y Morty! Explora 827 personajes únicos, encuentra tus favoritos y sumérgete en información detallada de los personajes. ¡Es tu fuente principal para todo lo relacionado con Rick y Morty!",
      img1: '/assets/projects/RickApp/img1.png',
      img2: '/assets/projects/RickApp/img2.png',
      img3: '/assets/projects/RickApp/img3.png',
      img4: '/assets/projects/RickApp/img4.png',
      link: 'https://github.com/ValentinDealbera/Rickapp'
    },
  ];
  
  page: Number = 1
  skillsToShow: Number = 1
  totalPages: Number = Math.ceil(this.projects.length / Number(this.skillsToShow))
  showSkills: Projects[] = this.projects.slice((Number(this.page) - 1), Number(this.skillsToShow))
  setPage(todo: string) {
    this.activeDiv1 = false
    this.activeDiv2 = false
    if (todo === '+') {
      if (Number(this.page) + 1 > Number(this.totalPages)) {
        this.page = 1;
      } else {
        this.page = Number(this.page) + 1;
      }
    } else if (todo === '-') {
      if (Number(this.page) - 1 < 1) {
        this.page = this.totalPages;
      } else {
        this.page = Number(this.page) - 1;
      }
    }
    this.showSkills = this.projects.slice(
      (Number(this.page) - 1) * Number(this.skillsToShow),
      Number(this.page) * Number(this.skillsToShow)
    );
  }
  ngOnInit() {
    this.getScreenWidth();
    this.startInterval();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lenguage: 'english'},
      queryParamsHandling: 'merge' // Merge with existing query parameters
    });
    this.route.queryParams.subscribe(params => {
      this.lenguage = params['lenguage'] // or use them as needed
    });
  }
  startInterval() {
    setInterval(() => {
      this.setPage('+');
    }, 7500);
  }
}

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from '../schemas/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
   skillsToShow: Number = 2
   constructor(private route: ActivatedRoute, private router: Router) {}
   lenguage!: String
  ngOnInit() {
    this.getScreenWidth();
    this.startInterval();
    this.skillsToShow = Number(this.screenWidth) > 1024 ? 2 : 1;
    this.setPage('+')
    this.setPage('-')
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lenguage: 'english'},
      queryParamsHandling: 'merge' // Merge with existing query parameters
    });
    this.route.queryParams.subscribe(params => {
      this.lenguage = params['lenguage'] // or use them as needed
    });
  }
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?: any) {
    this.screenWidth = window.innerWidth;
    // You can use this.screenWidth in your component to conditionally apply styles or perform other actions based on the screen width
  }
  @ViewChild('description') description: ElementRef | undefined;
  skills: Skills[] = [
    {
      name: 'Angular',
      image: '/assets/angular-svgrepo-com.svg',
      descriptionEN: 'Angular is a popular open-source framework for building web applications. Developed and maintained by Google, Angular provides a comprehensive set of tools and features for creating robust, scalable, and maintainable applications.',
      descriptionES: 'Angular es un popular framework de código abierto para construir aplicaciones web. Desarrollado y mantenido por Google, Angular proporciona un conjunto completo de herramientas y características para crear aplicaciones sólidas, escalables y mantenibles.'
    },
    {
      name: 'Express',
      image: '/assets/express-svgrepo-com(1).svg',
      descriptionEN: 'Express.js is a fast and minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web servers and APIs.',
      descriptionES: 'Express.js es un framework rápido y minimalista para aplicaciones web en Node.js. Proporciona un conjunto simple y flexible de características para construir servidores web y APIs.'
    },
    {
      name: 'Figma',
      image: '/assets/figma-svgrepo-com.svg',
      descriptionEN: 'Figma is a popular cloud-based design and prototyping tool used for creating user interfaces (UI) and user experience (UX) designs. It offers a range of features and collaborative capabilities that make it a go-to choice for designers and design teams.',
      descriptionES: 'Figma es una popular herramienta basada en la nube para diseño y prototipado, utilizada para crear interfaces de usuario (UI) y diseños de experiencia de usuario (UX). Ofrece una variedad de características y capacidades de colaboración que la convierten en la elección principal para diseñadores y equipos de diseño.'
    },
    {
      name: 'Firebase',
      image: '/assets/firebase-svgrepo-com.svg',
      descriptionEN: 'Firebase is a comprehensive and flexible mobile and web development platform provided by Google. It offers a wide range of tools and services that help developers build high-quality applications more efficiently.',
      descriptionES: 'Firebase es una plataforma completa y flexible de desarrollo móvil y web proporcionada por Google. Ofrece una amplia gama de herramientas y servicios que ayudan a los desarrolladores a construir aplicaciones de alta calidad de manera más eficiente.'
    },
    {
      name: 'MongoDB',
      image: '/assets/mongo-svgrepo-com.svg',
      descriptionEN: 'MongoDB is a popular open-source document-oriented database management system. It belongs to the NoSQL (non-relational) database category and offers a flexible and scalable solution for storing and retrieving data.',
      descriptionES: 'MongoDB es un popular sistema de gestión de bases de datos orientado a documentos de código abierto. Pertenece a la categoría de bases de datos NoSQL (no relacionales) y ofrece una solución flexible y escalable para almacenar y recuperar datos.'
    },
    {
      name: 'Next.js',
      image: '/assets/next-dot-js-svgrepo-com.svg',
      descriptionEN: 'Next.js is a popular open-source JavaScript framework for building modern web applications. It is built on top of React and provides a powerful set of features and conventions that enhance development productivity and optimize application performance.',
      descriptionES: 'Next.js es un popular framework de JavaScript de código abierto para construir aplicaciones web modernas. Está construido sobre React y proporciona un conjunto poderoso de características y convenciones que mejoran la productividad de desarrollo y optimizan el rendimiento de la aplicación.'
    },
    {
      name: 'PostgreSQL',
      image: '/assets/postgresql-svgrepo-com.svg',
      descriptionEN: 'PostgreSQL, often referred to as "Postgres," is a powerful and open-source relational database management system (RDBMS). It is known for its robustness, scalability, and adherence to SQL standards.',
      descriptionES: 'PostgreSQL, a menudo referido como "Postgres", es un potente sistema de gestión de bases de datos relacionales (RDBMS) de código abierto. Es conocido por su robustez, escalabilidad y adhesión a los estándares SQL.'
    },
    {
      name: 'React',
      image: '/assets/react-svgrepo-com.svg',
      descriptionEN: 'React is a widely-used open-source JavaScript library for building user interfaces. Developed by Facebook, React provides a component-based approach to UI development, enabling developers to create reusable and interactive UI components.',
      descriptionES: 'React es una ampliamente utilizada biblioteca de JavaScript de código abierto para construir interfaces de usuario. Desarrollada por Facebook, React proporciona un enfoque basado en componentes para el desarrollo de interfaces de usuario, lo que permite a los desarrolladores crear componentes de interfaz de usuario reutilizables e interactivos.'
    },
    {
      name: 'Redux',
      image: '/assets/redux-svgrepo-com.svg',
      descriptionEN: 'Redux is a predictable state management library for JavaScript applications. It is commonly used with libraries and frameworks like React, but it can be used with any JavaScript application. Redux follows a unidirectional data flow pattern and provides a centralized store to manage the state of an application.',
      descriptionES: 'Redux es una biblioteca de gestión de estado predecible para aplicaciones de JavaScript. Se utiliza comúnmente con bibliotecas y frameworks como React, pero se puede usar con cualquier aplicación de JavaScript. Redux sigue un patrón de flujo de datos unidireccional y proporciona una tienda centralizada para gestionar el estado de una aplicación.'
    },
    {
      name: 'Tailwind CSS',
      image: '/assets/tailwind-svgrepo-com.svg',
      descriptionEN: 'Tailwind CSS is a popular utility-first CSS framework that provides a set of pre-designed, ready-to-use CSS classes. Unlike traditional CSS frameworks that offer pre-styled components, Tailwind CSS focuses on providing a comprehensive set of utility classes that can be directly applied to HTML elements.',
      descriptionES: 'Tailwind CSS es un popular framework de CSS basado en utilidades que proporciona un conjunto de clases CSS pre-diseñadas y listas para usar. A diferencia de los frameworks CSS tradicionales que ofrecen componentes pre-estilizados, Tailwind CSS se centra en proporcionar un conjunto completo de clases utilitarias que se pueden aplicar directamente a los elementos HTML.'
    },
    {
      name: 'TypeScript',
      image: '/assets/typescript-official-svgrepo-com.svg',
      descriptionEN: 'TypeScript is a strongly typed superset of JavaScript that adds static typing capabilities to the language. It builds upon the syntax and features of JavaScript while providing additional tools for type checking and static analysis.',
      descriptionES: 'TypeScript es un superset de JavaScript fuertemente tipado que agrega capacidades de tipado estático al lenguaje. Se basa en la sintaxis y características de JavaScript y, al mismo tiempo, proporciona herramientas adicionales para la comprobación de tipos y el análisis estático.'
    },
    {
      name: 'Sass',
      image: '/assets/sass-svgrepo-com.svg',
      descriptionEN: 'Sass (Syntactically Awesome Style Sheets) is a powerful CSS preprocessor that enhances the capabilities of traditional CSS. It provides additional features and functionalities to make CSS code more organized, modular, and maintainable.',
      descriptionES: 'Sass (Syntactically Awesome Style Sheets) es un potente preprocesador de CSS que mejora las capacidades del CSS tradicional. Proporciona características y funcionalidades adicionales para organizar, modularizar y mantener el código CSS de manera más efectiva.'
    },
  ];
  
  page: Number = 1
  
  totalPages: Number = Math.ceil(this.skills.length / Number(this.skillsToShow))
  showSkills: Skills[] = this.skills.slice((Number(this.page) - 1), Number(this.skillsToShow))
  setPage(todo: string) {
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
    this.showSkills = this.skills.slice(
      (Number(this.page) - 1) * Number(this.skillsToShow),
      Number(this.page) * Number(this.skillsToShow)
    );
  }
 
  startInterval() {
    console.log(this.screenWidth);
    
    setInterval(() => {
      this.setPage('+');
    }, 7500);
  }
}

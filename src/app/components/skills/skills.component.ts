import { Component, ElementRef, ViewChild } from '@angular/core';
import { Skills } from '../schemas/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChild('description') description: ElementRef | undefined;
  skills: Skills[] = [
    {
      name: 'Angular',
      image: '/assets/angular-svgrepo-com.svg',
      description: 'Angular is a popular open-source framework for building web applications. Developed and maintained by Google, Angular provides a comprehensive set of tools and features for creating robust, scalable, and maintainable applications.'
    },
    {
      name: 'Express',
      image: '/assets/express-svgrepo-com(1).svg',
      description: 'Express.js is a fast and minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web servers and APIs.'
    },
    {
      name: 'Figma',
      image: '/assets/figma-svgrepo-com.svg',
      description: 'Figma is a popular cloud-based design and prototyping tool used for creating user interfaces (UI) and user experience (UX) designs. It offers a range of features and collaborative capabilities that make it a go-to choice for designers and design teams.'
    },
    {
      name: 'Firebase',
      image: '/assets/firebase-svgrepo-com.svg',
      description: 'Firebase is a comprehensive and flexible mobile and web development platform provided by Google. It offers a wide range of tools and services that help developers build high-quality applications more efficiently.'
    },
    {
      name: 'MongoDB',
      image: '/assets/mongo-svgrepo-com.svg',
      description: 'MongoDB is a popular open-source document-oriented database management system. It belongs to the NoSQL (non-relational) database category and offers a flexible and scalable solution for storing and retrieving data.'
    },
    {
      name: 'Next.js',
      image: '/assets/next-dot-js-svgrepo-com.svg',
      description: 'Next.js is a popular open-source JavaScript framework for building modern web applications. It is built on top of React and provides a powerful set of features and conventions that enhance development productivity and optimize application performance.'
    },
    {
      name: 'PostgreSQL',
      image: '/assets/postgresql-svgrepo-com.svg',
      description: 'PostgreSQL, often referred to as "Postgres," is a powerful and open-source relational database management system (RDBMS). It is known for its robustness, scalability, and adherence to SQL standards.'
    },
    {
      name: 'React',
      image: '/assets/react-svgrepo-com.svg',
      description: 'React is a widely-used open-source JavaScript library for building user interfaces. Developed by Facebook, React provides a component-based approach to UI development, enabling developers to create reusable and interactive UI components.'
    },
    {
      name: 'Redux',
      image: '/assets/redux-svgrepo-com.svg',
      description: 'Redux is a predictable state management library for JavaScript applications. It is commonly used with libraries and frameworks like React, but it can be used with any JavaScript application. Redux follows a unidirectional data flow pattern and provides a centralized store to manage the state of an application.'
    },
    {
      name: 'Tailwind CSS',
      image: '/assets/tailwind-svgrepo-com.svg',
      description: 'Tailwind CSS is a popular utility-first CSS framework that provides a set of pre-designed, ready-to-use CSS classes. Unlike traditional CSS frameworks that offer pre-styled components, Tailwind CSS focuses on providing a comprehensive set of utility classes that can be directly applied to HTML elements.'
    },
    {
      name: 'TypeScript',
      image: '/assets/typescript-official-svgrepo-com.svg',
      description: 'TypeScript is a strongly typed superset of JavaScript that adds static typing capabilities to the language. It builds upon the syntax and features of JavaScript while providing additional tools for type checking and static analysis.'
    },
    {
      name: 'Sass',
      image: '/assets/sass-svgrepo-com.svg',
      description: 'Sass (Syntactically Awesome Style Sheets) is a powerful CSS preprocessor that enhances the capabilities of traditional CSS. It provides additional features and functionalities to make CSS code more organized, modular, and maintainable.'
    },
  ]
  page: Number = 1
  skillsToShow: Number = 2
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
  ngOnInit() {
    this.startInterval();
  }
  startInterval() {
    setInterval(() => {
      this.setPage('+');
    }, 7500);
  }
}

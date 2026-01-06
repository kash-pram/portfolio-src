// src/app/home/home.ts
import { Component, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  mobileMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  constructor(protected themeService: ThemeService) {}

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Git', level: 85 }
  ];

  experiences = [

    {
      period: '2025 - present',
      role: 'Entrepreneurial',
      company: 'Personal',
      description: 'Working on a colorful mix of ideas',
      // technologies: ['Angular', 'TypeScript', 'React']
    },
    {
      period: '2021 - 2023',
      role: 'Senior Software Technologist',
      company: 'CES IT',
      description: 'Engineered high-security healthcare portals for Clinisys to manage critical patient data.',
      // technologies: ['Angular', 'TypeScript', 'RxJS', 'Moment.js', 'Tailwind CSS', 'REST API', 'Postman', 'Swagger']
    },
    {
      period: '2017 - 2019',
      role: 'Senior Software Technologist & Lead Developer',
      company: 'CES IT',
      description: 'Transformed legacy web applications through code refactoring and performance tuning, while mentoring junior engineers and leading high-fidelity UI development from UX designs.',
      // technologies: ['AngularJS', 'Node.js', 'AWS Cognito', 'Lambda', 'Lodash', 'Bootstrap CSS',  'Google Maps API', 'Stripe', 'MySQL']
    },
    {
      period: '2014 - 2015',
      role: 'Quality Assurance Engineer',
      company: 'Amazon',
      description: 'Served as QA owner for the FireOS My Account app, achieving 100% test coverage by identifying edge cases and drafting automated unit test cases.',
      // technologies: ['Android', 'Java', 'Jenkins', 'Selenium', 'Bash', 'JIRA']
    },
    {
      period: '2013 - 2014',
      role: 'Software Development Consultant',
      company: 'Amazon',
      description: 'Enhanced server-rendered web portals with dynamic data visualizations and upgraded automation frameworks using Python and Unix shell scripts.',
      // technologies: ['PHP', 'Python', 'MySQL', 'Chart.js', 'Perforce', 'Bash']
    },
    {
      period: '2011 - 2013',
      role: 'Programmer Analyst',
      company: 'Cognizant (CTS)',
      description: 'Developed MVC-based ASP.NET web applications and configured complex stored procedures and SSIS packages via MS SQL Server.',
      // technologies: ['ASP.NET', 'C#', 'MS SQL Server', 'ADO.NET', 'AJAX', 'jQuery', 'SVN']
    }
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Angular and Node.js',
      tags: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['Angular', 'Firebase', 'RxJS']
    },
    {
      title: 'Portfolio Builder',
      description: 'SaaS platform for creating professional portfolios',
      tags: ['Angular', 'TypeScript', 'SCSS']
    }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.mobileMenuOpen.set(false);
  }
}
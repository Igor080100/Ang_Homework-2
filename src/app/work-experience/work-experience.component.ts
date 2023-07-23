import { Component } from '@angular/core';

type TExp = {
  bio: {
    firstName: string;
    lastName: string;
  }
  experience: string;
  company: string;
  position: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class ExperienceComponent {
  experiences: Array<TExp> = [
    {
      bio: {
        firstName: 'Phil',
        lastName: 'Spencer',
      },
      experience: '1 year',
      company: 'EPAM',
      position: 'Junior dev',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
}

import { Component } from '@angular/core';

type TSkills = {
  knowledge: {
    languages: string;
    frameworks: string;
  };
  certificates: string;
  photo: string;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Array<TSkills> = [
    {
      knowledge: {
        languages: 'Pascal, JS, TS',
        frameworks: 'Angular, React, Vue'
      },
      certificates: 'front-end dev certificate',
      photo: 'assets/Phil_Spencer_2019.jpg'
    }
  ];
}

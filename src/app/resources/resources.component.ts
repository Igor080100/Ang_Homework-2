import { Component } from '@angular/core';

interface IRes {
  name: string;
  link: string;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources: Array<IRes> = [
    {
      name: 'GitHub',
      link: 'https://github.com/your_username'
    },
  ];
}

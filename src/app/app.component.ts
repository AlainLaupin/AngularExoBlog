import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      content: 'Moi je m\'appelle Jean-Mi et j\'aime les frites !',
      loveIts: -10,
      date: Date()
    },
    {
      title: 'Post 2',
      content: 'Vive la fête à la saucisse !',
      loveIts: 0,
      date: Date()
    },
    {
      title: 'Post 3',
      content: 'DEUS VULT !!!',
      loveIts: 88,
      date: Date()
    }
  ];
}

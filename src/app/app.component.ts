import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/profile', icon: 'people' },
    { title: 'Experience', url: '/experience', icon: 'construct' },
    { title: 'Academic', url: '/academic', icon: 'school' },
    { title: 'Personal Projects', url: '/personal-project', icon: 'flash' },
    { title: 'Certifications', url: '/certifications', icon: 'book' },
    { title: 'Awards & Acheievments', url: 'awards', icon: 'diamond' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

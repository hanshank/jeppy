import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'jeopardy';
  age: number = 27;

  constructor() {
    this.title = 'Jeopardy';
    this.changeAge(30);
  }

  changeAge(age: number): void {
    this.age = age;
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSExamSystem';
  // constructor(private router: Router) {
  //   this.router.events.pipe(
  //     filter((event) => event instanceof NavigationEnd)
  //   ).subscribe((event) => {
  //     // event.url will contain the URL of the current tab
  //     console.log('Tab changed to: ', event);
  //     // perform any other actions you want to perform when the tab changes
  //   });
  // }
}

# NgFor

We use this directive to render a list of objects

In app.component.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
    {id: 4, name:'course4'},
  ]
}
```

In app.component.html

```html
<ul>
  <li *ngFor="let course of courses; index as i ">
    {{ course.name }}
  </li>
</ul>

```
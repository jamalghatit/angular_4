# ngIf

There are times that you may want to show or hide part of a page depending on some condition.

We use Directives to modify the DOM. Now there are two types of directives:
- Structural: Modify the structure of the DOM
- Attribuite: Modify the attribuites of DOM elements

In app.component.ts:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [1, 2]
}
```

In app.component.html:

```html
<div *ngIf="courses.length > 0">
  List of courses
</div>
<div *ngIf="courses.length ==0">
  No courses yet
</div>
```

Instead of repeat yourself:
```html
<div *ngIf="courses.length > 0; else noCourses">
  List of courses
</div>
<ng-template #noCourses>
  No courses yet
</ng-template>
```

or

```html
<div *ngIf="courses.length > 0; then coursesList else noCourses"> </div>

<ng-template #coursesList>
  List of courses
</ng-template>

<ng-template #noCourses>
  No courses yet
</ng-template>

```
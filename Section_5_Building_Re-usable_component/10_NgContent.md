# NgContent

It is used for inject text or markup into components becoming the components more reusable.

in panel.component.ts:

```ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

```
In panel.component.html

```html
<div class="panel panel-default">
  <div class="panel-heading">
    <ng-content select=".heading"></ng-content> 
  </div>
  <div class="panel-body">
    <ng-content select=".body"></ng-content>
  </div>
</div>
```

In app.component.html

```html
<app-panel>
  <div class="heading">
    <h1>Heading</h1>
  </div>

  <div class="body">
    <h2>Body</h2>
    <p>Some content here....</p>
  </div>

</app-panel>
```

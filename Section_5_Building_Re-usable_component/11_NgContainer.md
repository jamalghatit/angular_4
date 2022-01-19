# Ng-Container

So if you want to render something without putting it inside a div or another kind of
html element (as we do in ng-content), use ng-container element in Angular.

In app.component.html

```html
<app-panel>
  <ng-container class="heading" >Header</ng-container>
  <div class="body">
    <h2>Body</h2>
    <p>Some content here....</p>
  </div>

</app-panel>

```
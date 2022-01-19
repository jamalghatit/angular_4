# Templates

My recommendation is to use templates externally if there are more than 5 lines
of code.

```ts
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html', //ou
  //template: "", 
  styleUrls: ['./favorite.component.css'],
})
```
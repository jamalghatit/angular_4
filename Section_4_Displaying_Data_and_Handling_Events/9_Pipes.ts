// We use pipe to format data.
// For example we have a bunch of built in pipes like uppercase, lowercase, decimal, currency, and percent.

/*

import { Component} from '@angular/core';

@Component({
  selector: 'pipe',
  template: `
    {{ course.title  | uppercase | lowercase}} <br>
    {{ course.students | number }} <br>
    {{ course.rating | number:'1.2-2' }} <br>
    {{ course.price | currency:"BRL":true:'3.2-2'}} <br>
    {{ course.releaseDate | date:"shortDate" }}
  `,
})
export class PipeComponent{
  course = {
    title: "The complete angular course",
    rating: 4.9688,
    students: 4458413,
    price: 190.56,
    releaseDate: new Date(2016, 3, 1)
  }
}

*/
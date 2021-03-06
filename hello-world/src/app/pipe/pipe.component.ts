import { Component} from '@angular/core';

@Component({
  selector: 'pipe',
  template: `
    <!-- {{ course.title  | uppercase | lowercase}} <br>
    {{ course.students | number }} <br>
    {{ course.rating | number:'1.2-2' }} <br>
    {{ course.price | currency:"BRL":true:'3.2-2'}} <br>
    {{ course.releaseDate | date:"shortDate" }} -->

    {{ text | summary:10 }}
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

  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
 `
}

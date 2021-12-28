import { Component } from "@angular/core";
import { AuthorsService } from "./authors.services";

@Component({
  selector: 'authors',
  template: `
  <h2> {{num_of_authors}} Authors</h2>
  <ul>
    <li *ngFor= "let author of authors">
      {{ author }}
    </li>
  </ul>
  `,
})

export class AuthorComponent{
  authors;
  num_of_authors;

  constructor(service: AuthorsService){
    this.authors = service.getAuthors();
    this.num_of_authors = this.authors.length;
  }
}



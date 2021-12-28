import { Injectable } from '@angular/core';
 //We would need this decorator only if this service had dependencies in its constructor.
// Now, we didn't use this decorator when defining components, because when we use the component decorator,
// that decorator internally includes these injectable decorator.

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}

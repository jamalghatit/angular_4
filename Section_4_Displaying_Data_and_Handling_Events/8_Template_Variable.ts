// course1.component.ts

/*

    <input (keyup.enter)="onKeyUpCatch($event)"/>

    onKeyUpCatch($event:any){
        console.log($event.target.value);
    }

    -----

        Instead of passing this event object around, we can declare a variable in our template
    that references this input field. So here I declare a variable like this: #email
    Let's imagine this input field like this capturing the user's email, so I declare a variable using this hashtag 
    or the pound sign, and this is the name of our variable, call this a template variable. 
    And this references this input field.
    
    <input #email (keyup.enter)="onKeyUpCatch1(email.value)"/>

    onKeyUpCatch1(email:any){
    console.log(email);
  }


*/
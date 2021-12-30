import { Component } from "@angular/core";

@Component({
  selector: 'courses1',
  template: `
  <!--
    <button class="btn btn-primary" [class.active]="isAtive">save</button>
    <br><br>
    <button class="btn btn-primary" [class.disabled]="isAtive">Disabled</button>
    <br><br>
    <button class="btn btn-primary" [class.blablabla]="isAtive">Custom class</button>
    <br><br>
    <button [style.backgroundColor]="isAtive ? 'blue' : 'red' ">asdfadf</button>
    <br><br>
     -->

    <!-- Event Bubbling -->

    <!--
    <div (click)="OnDivClick()">
      <button (click)="onSave($event)">Save - event binding</button>
    </div>
    <br><br>

    <input (keyup)="onKeyUp($event)" placeholder="Event Binding" >
    <br><br>

    <input (keyup.enter)="onKeyUp1()" placeholder="event filtering" />
    <br><br>
    -->

    <!-- <input (keyup.enter)="onKeyUpCatch($event)"/> -->


     <!-- <input #email (keyup.enter)="onKeyUpCatch1(email.value)"/>-->

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp3()" />
  `
})

export class Courses1Component{
  // isAtive = true;

  // OnDivClick(){
  //   console.log("Div clicked")
  // }
  // onSave($event:any) {
  //   $event.stopPropagation(); // Stop Event Bubbling.
  //   console.log("Button was clicked", $event);
  // }
  // onKeyUp($event:any){
  //   if ($event.keyCode === 13) console.log("ENTER was pressed")
  // }

  // // Event Filtering
  // onKeyUp1(){
  //   console.log("ENTER was pressed")
  // }

  // onKeyUpCatch($event:any){
  //   console.log($event.target.value);
  // }

  // onKeyUpCatch1(email:any){
  //   console.log(email);
  // }

  email:any = "blabla@blabla";

  onKeyUp3(){
    console.log(this.email);
  }
}

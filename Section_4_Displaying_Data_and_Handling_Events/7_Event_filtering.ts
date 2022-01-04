// go to courses1.component.ts

/*
<input (keyup)="onKeyUp($event)" />

onKeyUp($event:any){
    if ($event.keyCode === 13) console.log("ENTER was pressed")
  }

Now in Angular, we have a better way to implement the exact same feature. So we can apply a filter when handling an event.
So here, when handling the keyUpEvent, we can add.enter

<input (keyup.enter)="onKeyUp($event)" />

onKeyUp($event:any){
    if ($event.keyCode === 13) console.log("ENTER was pressed")
  }

  */
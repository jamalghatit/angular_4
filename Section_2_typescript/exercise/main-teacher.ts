import { LikeComponent } from './like_teacher.component';

let component = new LikeComponent(10, true);

component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);

/* 
To run this code without warning about the version of javascript, use:
tsc *.ts --target ES5 && node main_teacher.js
*/
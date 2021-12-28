"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_teacher_component_1 = require("./like_teacher.component");
var component = new like_teacher_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));

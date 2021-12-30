import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { Courses1Component } from './course1.component';
import { CoursesServices } from "./courses.service";
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    Courses1Component,
    PipeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesServices
  ], //We need to register all the dependencies that components in this module are dependent upon.
                //For example, our courses component is dependent upon the service.
  bootstrap: [AppComponent]
})
export class AppModule { }

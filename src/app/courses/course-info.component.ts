import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activateRouter: ActivatedRoute, private courseService : CourseService) { }

    ngOnInit(): void{
       // this.courseId =parseInt(this.activateRouter.snapshot.paramMap.get('id'));
       this.course = this.courseService.retriveById(+this.activateRouter.snapshot.paramMap.get('id'));
    }

}
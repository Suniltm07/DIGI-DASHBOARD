import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  // firstNum = 0;
  // secondNum =0;
  // output = 0;
  // constructor(private router: Router) {}

  // ngOnInit(): void {
  // }
 
  // calculate(){
  //   let sharedService = new SharedService();
  //   this.output=sharedService.calculate(this.firstNum,this.secondNum);
  //   sharedService.firstPageValue=this.output;
  // }

  // next(){
  //   this.router.navigate(['second']);
  // }
  shape = '';
  color = '';
  shapeClass = '';
  shapesService: any;

  constructor(shapesService: ShapesService) { }

  ngOnInit(): void {
  }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }

}

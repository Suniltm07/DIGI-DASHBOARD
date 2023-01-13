import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  // firstNum = 0;
  // secondNum =0;
  // output = 0;
  // previousPageVal = 0;
  // constructor(private router: Router) {}

  // ngOnInit(): void {
  // }
  // calculate(){
  //   let sharedService = new SharedService();
  //   this.output = sharedService.calculate(this.firstNum,this.secondNum);
  //   this.previousPageVal = sharedService.firstPageValue;
  // }
  // next(){
  //   this.router.navigate(['first']);
    
  // }
  shape = '';
  color = '';
  shapeClass = '';
  shapesService: any;

  constructor() { }

  ngOnInit(): void {
  }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }

}

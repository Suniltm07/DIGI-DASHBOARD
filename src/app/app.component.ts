import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-handson';
  highlightColor= 'white';
  isStyleApplied = false;
  highlight(color:string){
    this.highlightColor=color;

  }
  toggleStyle(){
    this.isStyleApplied = !this.isStyleApplied;
  }
}

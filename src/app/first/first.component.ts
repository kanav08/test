import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  date:String;
  constructor() { 
    setInterval(()=>{
      this.date=new Date().toDateString()+" "+new Date().toLocaleTimeString();
    },1000);
  }

  ngOnInit() {
  }
sum( a: number, b: number){
  return a+b;
}
}

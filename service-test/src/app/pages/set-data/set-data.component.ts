import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.css']
})
export class SetDataComponent implements OnInit {
  heroList = [
    {
      name: "jack",
      age: 18
    }
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.heroList.push({
        name: "tom",
        age: 26
      });
    },3000);
  }

}

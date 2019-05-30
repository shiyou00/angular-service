import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit, OnChanges {
  _heroList;

  @Input() heroList;
  @Input() tag;
  // @Input() set heroList(value){
  //   this._heroList = value;
  //   this._heroList.forEach((item)=>{
  //     item['checked'] = false;
  //   });
  // };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges({heroList}: SimpleChanges){
    if(heroList.currentValue.length > 0){
        this._heroList = heroList.currentValue;
        this._heroList.forEach((item)=>{
          item['checked'] = false;
        });
    }
  }
}

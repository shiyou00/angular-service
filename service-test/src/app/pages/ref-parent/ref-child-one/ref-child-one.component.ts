import { Component, OnInit, Optional } from '@angular/core';
import { Parent } from "../parent";
import { RefService } from "../../../shared/service/ref.service";

@Component({
  selector: 'ref-child-one',
  templateUrl: './ref-child-one.component.html',
  styleUrls: ['./ref-child-one.component.css']
})
export class RefChildOneComponent implements OnInit {

  constructor(
    @Optional() public parent: Parent,
    private ref : RefService
  ) { }

  ngOnInit() {
    // RefChildOneComponent 子组件不断发射数据
    let i = 0;
    setInterval(()=> {
      this.ref.numChange.emit(i++);
    }, 1000);
  }

  add(a,b){
    return a + b;
  }
}

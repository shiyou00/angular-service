import {Component, OnInit, Optional,Input} from '@angular/core';
import {RefParentComponent} from "../ref-parent.component";
import {RefService} from "../../../shared/service/ref.service";

@Component({
  selector: 'ref-child-two',
  templateUrl: './ref-child-two.component.html',
  styleUrls: ['./ref-child-two.component.css']
})
export class RefChildTwoComponent implements OnInit {

  @Input() com;

  constructor(
    @Optional() public parentComponent: RefParentComponent,
    private ref : RefService
  ) { }

  ngOnInit() {
    this.parentComponent.mult(1,2);
    this.parentComponent.childOne.add(1,2);
    // RefChildTwoComponent 组件中不断接受来自 RefChildOneComponent 组件发射过来的数据
    this.ref.numChange.subscribe((value:number)=>{
      console.log(value);
    });
  }

  sub(a,b){
    return a - b;
  }

}

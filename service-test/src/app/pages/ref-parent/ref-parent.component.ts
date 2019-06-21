import { Component, OnInit, ViewChild, AfterViewInit, forwardRef } from '@angular/core';
import { RefChildOneComponent } from "./ref-child-one/ref-child-one.component";
import { Parent } from "./parent";

@Component({
  selector: 'ref-parent',
  templateUrl: './ref-parent.component.html',
  styleUrls: ['./ref-parent.component.css'],
  providers: [{ provide: Parent, useExisting: forwardRef(() => RefParentComponent) }],
})
export class RefParentComponent implements OnInit, AfterViewInit {

  @ViewChild(RefChildOneComponent) childOne:RefChildOneComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.childOne);
    this.childOne.add(1,2);
  }

  mult(a,b){
    return a * b;
  }
}

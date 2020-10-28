import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/classes/base.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component extends  BaseComponent implements OnInit {
  ngOnInit() {
    this.log('Some message from component 2');
  }
}

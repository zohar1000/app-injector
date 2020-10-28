import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/classes/base.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component extends  BaseComponent implements OnInit {
  ngOnInit() {
    this.logError('Some error message from component 1');
  }
}

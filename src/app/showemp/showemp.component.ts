import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {
  public employees;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getemp();
  }

getemp(){
  this._data.doGET().subscribe(
          data => { this.employees = data},
          err => console.error(err),
          () => console.log('done loading Employees')
      );
    
}
}

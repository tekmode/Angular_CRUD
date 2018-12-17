import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delemp',
  templateUrl: './delemp.component.html',
  styleUrls: ['./delemp.component.css']
})
export class DelempComponent implements OnInit {
public employees;
ename:string;
constructor(private _data:DataService) {
  
 }

  ngOnInit() {
  this.getemp();
  }
  getemp(){
    this.ename='';
    this._data.doGET().subscribe(
            data => { this.employees = data},
            err => console.error(err),
            () => console.log('done loading Employees')
        );
      
  }
  
  delval()
{
var ret;
  this._data.doDELETE(this.ename).subscribe(
    data => { ret = data},
    err => console.error(err),
    () => console.log('done loading Employees')
      );
    alert("Employee Deleted Successfully");
    this.getemp();
      }
  
}

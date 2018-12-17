import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private _data:DataService) { }
ename:string;
edesg:string;
  ngOnInit() {
  }
saveval()
{
  var ret;
  let emp={
    name:this.ename,
    designation:this.edesg
  };
this._data.doPOST(emp).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('done loading Employees')

  );
  alert("Employee Added Successfully");
  this.ename='';
  this.edesg='';
}
}

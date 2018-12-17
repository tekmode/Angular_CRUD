import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

public employees;
public emp;
ename:string;
empname:string="";
designation:string="";
id:any="";
constructor(private _data:DataService) {

 }

  ngOnInit() {
  this.getemp();
//this.update();
}
  getemp(){

    this._data.doGET().subscribe(
            data => { this.employees = data},
            err => console.error(err),
            () => console.log('done loading Employees')
        );
      
  }
  
  update()
{
  
  this._data.doGETS(this.ename).subscribe(
    data => { this.emp = data},
    err => console.error(err),
    () => console.log('done loading Employees')
      );
      this.id=this.emp._id;
      this.empname=this.emp.name;
      this.designation=this.emp.designation;
      //alert(this.emp._id);

    }
    editval()
    {
  let ret;
  let body:{_id:any, name: string; designation:string} = {_id: this.id, 
    name: this.empname,
    designation:this.designation};
  this._data.doUPDATE(body).subscribe(
    data => { ret = data},
    err => console.error(err),
    () => console.log('done loading Employees')
      );
    alert("Employee Updated Successfully");
      this.getemp();
  }
  

}

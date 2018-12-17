import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
animations:[
  trigger('employees',[
   transition('* => *',[
     query(':enter',style({opacity:0}),{optional:true}),
     query(':enter',stagger('300ms',[
       animate('.6s ease-in',keyframes([
         style({opacity:0,transform:'translateY(-75%)',offset:0}),
         style({opacity:.5,transform:'translateY(35px)',offset:.3}),
         style({opacity:1,transform:'translateY(0)',offset:1}),
       ]))]),{optional:true}),
       query(':leave',stagger('300ms',[
        animate('.6s ease-in',keyframes([
          style({opacity:1,transform:'translateY(0)',offset:0}),
          style({opacity:.5,transform:'translateY(35px)',offset:.3}),
          style({opacity:0,transform:'translateY(-75%)',offset:1}),
        ]))]),{optional:true}) 
   ]) 
  ])
]

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  

  totalemp:number;//Interpolation
  btnval:string="Add an Employee";//property binding
  emp:string="Name of First Employee";//Two way databinding
  employees=['Rashid','Majid','Sajid'];//For Event Binding
  constructor() { }

  ngOnInit() {
 this.totalemp=this.employees.length;
  }
addemp(){
  this.employees.push(this.emp);
  this.emp='';
  this.totalemp=this.employees.length;
}
rememp(i){
this.employees.splice(i,1);
this.totalemp=this.employees.length;
}
}

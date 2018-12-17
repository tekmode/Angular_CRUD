import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
   
  doGET(){
    let url="http://localhost:3000/emp/employees";
    return this.http.get(url);
  }
  doGETS(name){
    let ename=name
    let url="http://localhost:3000/emp/employees/"+ename;
    return this.http.get(url);
  }
  doPOST(emp){
      let body=JSON.stringify(emp);
    let url="http://localhost:3000/emp/addemp";
    return this.http.post(url,body,httpOptions);
  }
  doUPDATE(body){
    let id=body._id;
    let name=body.name;
    let desig=body.designation;
    let body1=JSON.stringify(body);
    let url="http://localhost:3000/emp/editemp";
  return this.http.put(url,body1,httpOptions);
}
  doDELETE(name){
    let ename=name;
  let url="http://localhost:3000/emp/delemp/"+ename;
 return this.http.delete(url,httpOptions);
}
  }

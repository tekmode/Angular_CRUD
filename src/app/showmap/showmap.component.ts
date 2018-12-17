/// <reference types="@types/googlemaps" />
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmap',
  templateUrl: './showmap.component.html',
  styleUrls: ['./showmap.component.css']
})
export class ShowmapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }
   ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
 
  }
  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
}

}

import { Component, OnInit } from '@angular/core';
import { sp } from '@pnp/sp'

@Component({
  selector: 'app-slider-container-component',
  templateUrl: './slider-container-component.component.html',
  styleUrls: ['./slider-container-component.component.css']
})
export class SliderContainerComponentComponent implements OnInit {

  constructor() {
     sp.web.select('Title').get().then(w=>
    {
      console.log('web title: ',w.Title);
    });
  }

  ngOnInit() {
  }

}

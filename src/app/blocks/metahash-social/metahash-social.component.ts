import { Component, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-metahash-social',
  templateUrl: './metahash-social.component.html',
  styleUrls: ['./metahash-social.component.less']
})
export class MetahashSocialComponent implements OnInit {
  faTelegramPlane = faTelegramPlane;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faTimes, faInfoCircle, faCheck, faSmile, faMeh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metahash-buy',
  templateUrl: './metahash-buy.component.html',
  styleUrls: ['./metahash-buy.component.less']
})
export class MetahashBuyComponent implements OnInit {
  faTimes = faTimes;
  faInfoCircle = faInfoCircle;
  faCheck = faCheck;
  faSmile = faSmile;
  faMeh = faMeh;

  constructor() { }

  ngOnInit(): void {
  }

}

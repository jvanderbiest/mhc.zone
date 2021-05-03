import { Component, OnInit } from '@angular/core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metahash-lottery',
  templateUrl: './metahash-lottery.component.html',
  styleUrls: ['./metahash-lottery.component.less']
})
export class MetahashLotteryComponent implements OnInit {
  faTrophy = faTrophy;

  constructor() { }

  ngOnInit(): void {
  }

}

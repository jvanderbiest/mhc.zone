import { Component, OnInit } from '@angular/core';
import { faQuoteRight, faQuoteLeft, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-metahash-why',
  templateUrl: './metahash-why.component.html',
  styleUrls: ['./metahash-why.component.less']
})
export class MetahashWhyComponent implements OnInit {
  faQuoteRight = faQuoteRight;
  faQuoteLeft = faQuoteLeft;
  faExternalLinkAlt = faExternalLinkAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane, faFacebookF, faTwitter, faYoutube, faReddit, faMedium } from '@fortawesome/free-brands-svg-icons';
import { ModalPopupService } from 'src/app/modal-popup.service';

@Component({
  selector: 'app-splash-left',
  templateUrl: './splash-left.component.html',
  styleUrls: ['./splash-left.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SplashLeftComponent implements OnInit {

  faPlay = faPlay;
  faTelegramPlane = faTelegramPlane;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faReddit = faReddit;
  faMedium = faMedium;
  faTimes = faTimes;

  apiLoaded = false;

  player: YT.Player | undefined;
  metahashVideoId: string = 'PJ0gZchXAOk';
 
  savePlayer(player: YT.Player) {
    this.player = player;
  }

  onStateChange(event : any) {
  }
  
  youtubeModal = 'metahash-youtube';
  constructor(private modalPopupService: ModalPopupService) { }
  ngOnInit(): void {
  }
  
  openPlayer(event: Event) {
    event.preventDefault();
    this.modalPopupService.open(this.youtubeModal);
    this.player?.playVideo();
  }

  closePlayer() {
    this.modalPopupService.close(this.youtubeModal);
    this.player?.stopVideo();
  }

}
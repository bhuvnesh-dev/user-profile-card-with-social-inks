import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data: any = {};
  zoomFactor: number = 1;
  spinner: boolean = false;
  support: boolean = false;
  supportButton: boolean = false;
  moreData: any = [];
  showImage:boolean=false;
  social_buttons: any = [
    { id: 1, image: "../../assets/icon/facebook.svg", name: 'facebook', link: '' },
    { id: 2, image: "../../assets/icon/twitter.svg", name: 'twitter', link: '' },
    { id: 3, image: "../../assets/icon/instagram.svg", name: 'instagram', link: '' },
    { id: 4, image: "../../assets/icon/youtube.svg", name: 'youtube', link: '' },
  ]
  constructor(
    private inAppBrowser: InAppBrowser,
    private sanatizer: DomSanitizer) {
  }
  async getData() {
    setTimeout(() => {
      this.spinner = false;
    }, 3000)
  }
  ngOnInit() {
    this.spinner = true
    this.getData()
  }
  goto(link: string) {
    this.inAppBrowser.create(link, '_system')
  }
  handleRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete()
    }, 2000)
  }
  setItem(item:any) {
    return this.sanatizer.bypassSecurityTrustHtml(item)
  }
  async openImage(image:any) {
    this.showImage=true
  }
  handlePinch(event: any) {
    this.zoomFactor = event.scale;
  }
  closeModal(){
    this.showImage=false
  }
}

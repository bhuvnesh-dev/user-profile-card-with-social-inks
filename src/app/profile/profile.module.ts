import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { PinchZoomModule } from '@meddv/ngx-pinch-zoom';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    PinchZoomModule
  ],
  providers: [Storage, InAppBrowser],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}

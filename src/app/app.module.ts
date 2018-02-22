import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';

import { AppComponent } from './app.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGalleryComponent
  ],
  imports: [
    BrowserModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

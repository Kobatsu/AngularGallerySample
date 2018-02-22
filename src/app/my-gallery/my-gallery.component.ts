import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { GalleryItem, ImageItem, Gallery } from "@ngx-gallery/core";
import { GalleryRef } from "@ngx-gallery/core";
import { Lightbox } from "@ngx-gallery/lightbox";

@Component({
  selector: "app-my-gallery",
  templateUrl: "./my-gallery.component.html",
  styleUrls: ["./my-gallery.component.css"]
})
export class MyGalleryComponent implements OnInit {
  items: GalleryItem[];
  imageData = [
    {
      srcUrl: "https://placeimg.com/1000/1000/nature",
      previewUrl: "http://via.placeholder.com/200x200"
    },
    {
      srcUrl: "https://placeimg.com/1000/1000/nature",
      previewUrl: "http://via.placeholder.com/200x200"
    },
    {
      srcUrl: "https://placeimg.com/1000/1000/nature",
      previewUrl: "http://via.placeholder.com/200x200"
    },
    {
      srcUrl: "https://placeimg.com/1000/1000/nature",
      previewUrl: "http://via.placeholder.com/200x200"
    }
  ];
  @ViewChild('galleryToto') gal: GalleryRef;

  constructor(public lightbox: Lightbox, public gallery: Gallery) {}

  ngOnInit() {
    this.items = this.imageData.map(
      item => new ImageItem(item.srcUrl, item.previewUrl)
    );
    console.log(this.gallery);
    this.gallery.ref('lightbox').load(this.items);
    this.lightbox.open(0);
    //this.gallery..ref('lightbox').load(this.items);
  }
}

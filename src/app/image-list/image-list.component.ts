import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound:boolean=false;

  constructor( private _imageService : ImageService) { }

  handleSuccess(data:any){
    this.imagesFound=true;
    this.images=data.hits;
    console.log(data.hits);
  }

  searchImages(query:string)
  {
    return this._imageService.getImage(query).subscribe( data=> this.handleSuccess(data) );
  }

  ngOnInit() {
  }

}

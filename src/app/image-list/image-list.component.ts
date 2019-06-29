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
  searching: boolean = false;

  constructor( private _imageService : ImageService) { }

  handleSuccess(data:any){
    this.imagesFound=true;
    this.images=data.hits;
    console.log(data.hits);
  }

  handleError(error: any){
    console.log(error);
  }

  setId(id: string,idx:number)
  {
    // console.log(idx);
    // let elem=document.getElementById(id);
    // console.log(elem.getAttribute("data-target"));
    // elem.setAttribute("data-target","#"+idx.toString());
  }

  searchImages(query:string)
  {
    console.log(query);
    localStorage.setItem("searchKey",query);
    this.searching= true;
    console.log(this.searching);
    return this._imageService.getImage(query).subscribe( data=> this.handleSuccess(data),
    error =>this.handleError(error),
    () => this.searching=false );
  }

  ngOnInit() {
    const val=localStorage.getItem("searchKey");
    if(val!=null)
    {
        this.searchImages(val);
    }
  }

}

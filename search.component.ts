import { Component, OnInit } from '@angular/core';
import { NapsterService } from '../Services/napster.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public lnk: any = "hvla";
  public artists = "";
  public img: any = [];
  public info: any;
  public searchQuery = "";

  constructor(private napservice: NapsterService) { 
  }
  ngOnInit(): void {
  }

  public searchArtists(){
   this.napservice.getAllArtists(this.searchQuery).subscribe( (data) => {
      this.artists = data.search.data.artists[0].links.images.href;
      this.info = data.search.data.artists;
      console.log(this.info,this.info.length);
      for(let i=0; i< this.info.length; i++){
        this.napservice.get(this.info[i].links.images.href).subscribe( (data) => {
          (data.images[0].url)?(this.img[i] = <string>(data.images[0].url)):(this.img[i]= (""))
          console.log((data.images[0].url))
          console.log("hi",(this.img[i]),i,"end")
        });
      }
    });
   // this.napservice.get().subscribe( (data) => {
     // this.img = data.images[0].url;
  //  });
  //this.info[i].links.images.href
  }
 
}

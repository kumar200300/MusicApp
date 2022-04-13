import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Injectable({
  providedIn: 'root'
})
export class NapsterService {
 private authorizationKey = 'Bearer YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4';
  private httpOptions = {
    headers: new HttpHeaders( {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.authorizationKey
    })
  }; 

  constructor(private http: HttpClient) { }

  public getAllArtists(searchQuery: any): Observable<any> {
    let URL = `http://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${searchQuery}&type=artist`;
    //let URL = `https://developer.napster.com/api/v2.2#search?query=arijit&type=artist`;, this.httpOptions
    return this.http.get<any>(URL);
  }
  public get(artists:any): Observable<any> {
    let URL1 = artists;
   // URL1 = URL1+ `?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`;
    return this.http.get<any>(URL1+`?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`);
  }
}

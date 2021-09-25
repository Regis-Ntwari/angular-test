import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  hotSettings : Handsontable.GridSettings = {
    renderAllRows : false,
    maxRows : 500,
    manualColumnMove : true,
    manualColumnResize : true,
    height : 'auto',
    width : 'auto',
    licenseKey : 'non-commercial-and-evaluation'
  }
  movie : any;
  movies : [];

  constructor(private http: HttpClient) { 
    this.movies = []
   }

  ngOnInit(): void {
    this.http.get("https://dry-reef-91563.herokuapp.com/api/movies")
            .subscribe(Response => {
              console.log(Response);
              this.movie = Response;
              this.movies = this.movie
            })
  }
  public afterChange(e:any, hot:any){
    hot.getHandsontableInstance().render
  }

}

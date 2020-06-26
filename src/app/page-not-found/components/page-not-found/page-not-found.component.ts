import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  @ViewChild('visor')
  myCanvas: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  backClicked(){
    this.location.back();
  }

}

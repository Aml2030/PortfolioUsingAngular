import { Component } from '@angular/core';
import { Star } from "../star/star";
@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  imgs: {id: number, imgSrc: string}[] = [
    {id: 0, imgSrc: './images/port1.png'},
    {id: 1, imgSrc: './images/port2.png'},
    {id: 2, imgSrc: './images/port3.png'},
    {id: 3, imgSrc: './images/port1.png'},
    {id: 4, imgSrc: './images/port2.png'},
    {id: 5, imgSrc: './images/port3.png'},
  ];


  imgSelected:string='';
  isModalShowed:boolean=false;
  onSelect(x:string){
    console.log(x);
    this.imgSelected = x;
    this.isModalShowed=true;
  }

  closeModal(e:PointerEvent,img:HTMLImageElement){
    e.target!==img?this.isModalShowed=false:null;
  }
}

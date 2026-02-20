import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isScrolled:boolean=false;
@HostListener("window:scroll")
onScroll(){
  this.isScrolled=window.scrollY > 10 ;
}
}

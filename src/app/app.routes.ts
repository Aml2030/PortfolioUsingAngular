import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';

export const routes: Routes = [
  {path:"" , redirectTo:'home' , pathMatch:'full'},
  {path:"home" , component:Home,title:"home"},
  {path:"about" , component:About,title:"about"},
  {path:"contact" , component:Contact,title:"contact"},
  {path:"portfolio" , component:Portfolio,title:"portfolio"},
// {path:"**" , component:NotfoundComponent , title:'notfound'}
];

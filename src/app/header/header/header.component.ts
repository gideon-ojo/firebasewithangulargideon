import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  } from 'node:stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
 @Output() sideNavToggled = new EventEmitter<boolean>();
 menuStatus: boolean = false;
  constructor() { }
  ngOnInit(): void {
      
  }
  sideNavToggle(){
 this.menuStatus  = !this.menuStatus;
 this.sideNavToggled.emit(this.menuStatus)
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Power1, Bounce, TweenLite, Linear, RotationX} from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('manuscrita') box: ElementRef;

  constructor() { }

  ngOnInit() {
    this.doIt();
  }

  doIt(): void {
    TweenLite.to(this.box.nativeElement, 3, {text:"Moacir Sant'Ana.", ease: Linear.easeNone});
  }

}

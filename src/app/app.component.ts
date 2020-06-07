import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from './components/snakbar/snakbar.component';
import { Howl, Howler } from 'howler';
import { NgloaderService } from './services/ngloader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FAQ';
  isLightTheme: boolean = false;
  myTheme: string = "my-dark-theme";
  constructor(private _snackBar: MatSnackBar, public loaderService: NgloaderService) { }

  ngOnInit(): void {
  }

  OpenSnackbar() {
    this._snackBar.openFromComponent(SnakbarComponent, {
      duration: 1000
    })
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    this.myTheme = this.isLightTheme ? "my-light-theme" : "my-dark-theme";
    var sound = new Howl({
      src: ['assets/notifications/message_tones_mmdmr.mp3'],
      html5: true
    });

    sound.play();
  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}

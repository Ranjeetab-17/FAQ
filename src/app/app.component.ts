import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from './components/snakbar/snakbar.component';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FAQ';
  isLightTheme: boolean = false;
  myTheme: string = "my-dark-theme";
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.toggleTheme();
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

}

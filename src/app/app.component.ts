import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarComponent } from './components/snakbar/snakbar.component';
import { Howl, Howler } from 'howler';
import { NgloaderService } from './services/ngloader.service';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
//import { ChatAdapter } from 'ng-chat';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FAQ';
  href: string;
  isLightTheme: boolean = false;
  myTheme: string = "my-light-theme";
  constructor(private _snackBar: MatSnackBar,
    public loaderService: NgloaderService,
    private router: Router,
    public dialog: MatDialog,
    public themeService: ThemeService) {
    this.href = this.router.url;
    console.log(this.router.url);
  }

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

    this.themeService.toggleTheme(this.myTheme);

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

  public get currentUrl(): string {
    return this.router.url;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

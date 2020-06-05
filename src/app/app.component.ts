import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FAQ';

  constructor(private _snackBar: MatSnackBar) { }

  OpenSnackbar() {
    this._snackBar.open("FAQ Added Successfully", "!!", {
      duration: 1000
    });
  }
}

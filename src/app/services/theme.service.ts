import { Injectable, OnDestroy, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Theme } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends OverlayContainer implements OnDestroy {

  constructor(@Inject(DOCUMENT) _document: any, private overlayContainer: OverlayContainer) {
    super(_document);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  toggleTheme(theme: string) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(theme === "my-light-theme" ? "my-dark-theme" : "my-light-theme");
    body.classList.add(theme);
    this.overlayContainer.getContainerElement().className = theme;
  }
}

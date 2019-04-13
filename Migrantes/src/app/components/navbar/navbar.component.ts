import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) 
  {
    iconRegistry.addSvgIcon(
        'embarcadero',
    sanitizer.bypassSecurityTrustResourceUrl('assets/icons/Embarcadero-logo.svg'));

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HeaderComponent, NavComponent, RouterOutlet, NgbModalModule, NgbCollapseModule],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name = '';
}

// NgModel
// ngStyle
// ngClows
// ngFor
// ngIF

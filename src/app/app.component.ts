import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleMenu: boolean = false;

  handleToggleModile() {
    this.toggleMenu = !this.toggleMenu;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: [ './footer.scss' ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  date: Date  = new Date();
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatapickerComponent } from './datapicker/datapicker.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , DatapickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cli-example-app';
}



import {ChangeDetectionStrategy, Component , model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-datapicker',
  
  providers: [provideNativeDateAdapter()],
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.scss',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule , MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatapickerComponent {

  selected = model<Date | null>(null);

}



import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common'; 
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-poke-dialog',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule,MatListModule],
  templateUrl: './poke-dialog.component.html',
  styleUrl: './poke-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// para pasar datos definimos como se recibe
export class PokeDialogComponent {
   readonly dialog = Inject(MatDialog);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

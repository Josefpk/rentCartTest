import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-cards-cars',
  templateUrl: './cards-cars.component.html',
  styleUrls: ['./cards-cars.component.scss']
})
export class CardsCarsComponent implements OnInit {

  @Input() public mockDataCars: any

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  /**
   * Metodo apra abrir modal
   * @param info data del modal
   */
  openInfoCar(info?: any) {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      width: '90%',
      height: '80%',
      data: info
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /**
   * Funcon alerta, pagina en construccion
   */
  openAlert() {
    alert('Pagina en construcción');
  }

}

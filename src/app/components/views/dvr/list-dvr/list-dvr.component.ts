import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MensajeConfirmacionComponent } from 'src/app/components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { Dvr } from '../dvr';
import { DvrService } from '../dvr.service';

@Component({
  selector: 'app-list-dvr',
  templateUrl: './list-dvr.component.html',
  styleUrls: ['./list-dvr.component.css']
})
export class ListDvrComponent implements OnInit {

  dvrs: Dvr[];
  displayedColumns: string[] = [
  "iddvr",
  "codigoactivo",
  "marca",
  "modelo",
  "descripcion",
  "acciones"
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private service: DvrService,
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.findAll();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   //para cargar datos
   findAll() {
    this.service.findAll().subscribe((respuesta) => {
      console.log(respuesta);
      this.dvrs = respuesta;
      this.dataSource = new MatTableDataSource(this.dvrs); //this added, for table
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(index: number): void {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: "350px",
      data: { mensaje: "Esta seguro que desea eliminar el dvr" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === "aceptar") {
        this.service.delete(index).subscribe(
          (respuesta) => {
            this.router.navigate(["dvrs"]);
            this.service.mensagem("dvr eliminada con éxito!");
            this.findAll();
            this.snackBar.open("La dvr fue eliminada con éxito", "", {
              duration: 3000,
            });
          },
          (err) => {
            this.service.mensagem(err.error.error);
          }
        );
      }
    });
  }
  navegarParaCategoriaCreate() {
    this.router.navigate(["dvr/create"])
  }
}

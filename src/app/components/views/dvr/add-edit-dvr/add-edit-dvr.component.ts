import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Dvr } from '../dvr';
import { DvrService } from '../dvr.service';

@Component({
  selector: 'app-add-edit-dvr',
  templateUrl: './add-edit-dvr.component.html',
  styleUrls: ['./add-edit-dvr.component.css']
})
export class AddEditDvrComponent implements OnInit {
  //para editar
  iddvr: any;
  accion = "Crear";
  //para editar
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: DvrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.myForm = this.fb.group({
      iddvr: [""],
      codigoactivo: ["", [Validators.required]],
      descripcion: [""],
      marca: [""],
      modelo: [""],
    });
    const idParam = "iddvr";
    this.iddvr = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.iddvr !== undefined) {
      this.accion = "Editar";
      this.esEditar();
    }
  }
  create() {
    const dvr: Dvr = {
      iddvr: this.myForm.get("iddvr").value,
      codigoactivo: this.myForm.get("codigoactivo").value,
      descripcion: this.myForm.get("descripcion").value,
      marca: this.myForm.get("marca").value,
      modelo: this.myForm.get("modelo").value
    };
    if (this.iddvr !== undefined) {
      this.update(dvr);
    } else {
      this.service.create(dvr).subscribe(
        (respuesta) => {
          this.router.navigate(["dvr"]);
          this.service.mensagem("Dvr creado con éxito!");
        },
        (err) => {
          for (let i = 0; i < err.error.errors.length; i++) {
            this.service.mensagem(err.error.errors[i].message);
          }
        }
      );
    }
  }

  update(dvr: Dvr): void {
    this.service.update(dvr, this.iddvr).subscribe(
      (respuesta) => {
        this.router.navigate(["dvr"]);
        this.service.mensagem("dvr actualizada con éxito");
      },
      (err) => {
        this.service.mensagem("debe llenar todos los campos!");
      }
    );
  }

  esEditar(): void {
    this.service.findById(this.iddvr).subscribe((respuesta) => {
      this.myForm.patchValue({
        codigoactivo: respuesta.codigoactivo,
        descripcion: respuesta.descripcion,
        marca: respuesta.marca,
        modelo: respuesta.modelo
      });
    });
  }

}

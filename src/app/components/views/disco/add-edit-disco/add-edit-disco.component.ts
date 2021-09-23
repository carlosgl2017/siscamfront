import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Disco } from '../disco';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-add-edit-disco',
  templateUrl: './add-edit-disco.component.html',
  styleUrls: ['./add-edit-disco.component.css']
})
export class AddEditDiscoComponent implements OnInit {

   //para editar
   iddisco: any;
   accion = "Crear";
   //para editar
   myForm: FormGroup;
   constructor(
     private fb: FormBuilder,
     private service: DiscoService,
     private router: Router,
     private aRoute: ActivatedRoute,
     private snackBar: MatSnackBar
   ) {
     this.myForm = this.fb.group({
       iddisco: [""],
       codigoactivo: ["",[Validators.required]],
       descripcion: [""],
       capacidad: [""]
     });
     const idParam = "iddisco";
     this.iddisco= this.aRoute.snapshot.params[idParam];
   }
 
   ngOnInit(): void {
     if (this.iddisco !== undefined) {
       this.accion = "Editar";
       this.esEditar();
     }
   }
   create() {
     const disco: Disco = {
       iddisco: this.myForm.get("iddisco").value,
       codigoactivo: this.myForm.get("codigoactivo").value,
       descripcion: this.myForm.get("descripcion").value,
       capacidad: this.myForm.get("capacidad").value
     };
     if (this.iddisco !== undefined) {
       this.update(disco);
     } else {
       this.service.create(disco).subscribe(
         (respuesta) => {
           this.router.navigate(["discos"]);
           this.service.mensagem("Disco creado con éxito!");
         },
         (err) => {
           for (let i = 0; i < err.error.errors.length; i++) {
             this.service.mensagem(err.error.errors[i].message);
           }
         }
       );
     }
   }
 
   update(disco: Disco): void {
     this.service.update(disco, this.iddisco).subscribe(
       (respuesta) => {
         this.router.navigate(["discos"]);
         this.service.mensagem("disco actualizado con éxito");
       },
       (err) => {
         this.service.mensagem("debe llenar todos los campos!");
       }
     );
   }
 
   esEditar(): void {
     this.service.findById(this.iddisco).subscribe((respuesta) => {
       this.myForm.patchValue({
         capacidad: respuesta.capacidad,
         codigoactivo: respuesta.codigoactivo,
         descripcion: respuesta.descripcion
       });
     });
   }

}

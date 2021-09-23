import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Oficina } from '../oficina';
import { OficinaService } from '../oficina.service';

@Component({
  selector: 'app-add-edit-oficina',
  templateUrl: './add-edit-oficina.component.html',
  styleUrls: ['./add-edit-oficina.component.css']
})
export class AddEditOficinaComponent implements OnInit {

   //para editar
   idoficina: any;
   accion = "Crear";
   //para editar
   myForm: FormGroup;
   constructor(
     private fb: FormBuilder,
     private service: OficinaService,
     private router: Router,
     private aRoute: ActivatedRoute,
     private snackBar: MatSnackBar
   ) {
     this.myForm = this.fb.group({
       idoficina: [""],
       oficina: ["",[Validators.required]],
       descripcion: [""],
     });
     const idParam = "idoficina";
     this.idoficina = this.aRoute.snapshot.params[idParam];
   }
 
   ngOnInit(): void {
     if (this.idoficina !== undefined) {
       this.accion = "Editar";
       this.esEditar();
     }
   }
   create() {
     const oficina: Oficina = {
       idoficina: this.myForm.get("idoficina").value,
       oficina: this.myForm.get("oficina").value,
       descripcion: this.myForm.get("descripcion").value
     };
     if (this.idoficina !== undefined) {
       this.update(oficina);
     } else {
       this.service.create(oficina).subscribe(
         (respuesta) => {
           this.router.navigate(["oficinas"]);
           this.service.mensagem("Oficina creada con éxito!");
         },
         (err) => {
           for (let i = 0; i < err.error.errors.length; i++) {
             this.service.mensagem(err.error.errors[i].message);
           }
         }
       );
     }
   }
 
   update(oficina: Oficina): void {
     this.service.update(oficina, this.idoficina).subscribe(
       (respuesta) => {
         this.router.navigate(["oficinas"]);
         this.service.mensagem("Oficina actualizada con éxito");
       },
       (err) => {
         this.service.mensagem("debe llenar todos los campos!");
       }
     );
   }
 
   esEditar(): void {
     this.service.findById(this.idoficina).subscribe((respuesta) => {
       this.myForm.patchValue({
         oficina: respuesta.oficina,
         descripcion: respuesta.descripcion
       });
     });
   }

}

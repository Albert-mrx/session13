import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component {
    valor : any;
    fileJson =[
      {
        "apellido":"quispe",
        "casado":false,
        "direccion":"los rosales 123",
        "nombre":"lucas",
        "telefono":1234567
      },
      {
        "apellido":"quispe",
        "casado":false,
        "direccion":"los rosales 123",
        "nombre":"lucas",
        "telefono":1234567
      },
      {
        "apellido":"quispe",
        "casado":false,
        "direccion":"los rosales 123",
        "nombre":"lucas",
        "telefono":1234567
      },
      {
        "apellido":"quispe",
        "casado":false,
        "direccion":"los rosales 123",
        "nombre":"lucas",
        "telefono":1234567
      }
    ]
}

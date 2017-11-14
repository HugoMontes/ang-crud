import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Angular CRUD';
  mensaje:string = null;

  empleados=[
    {'nombre':'Juan', 'profesion':'Abogado', 'email':'juan@gmail.com'},
    {'nombre':'Marcos', 'profesion':'Medico', 'email':'marcos@gmail.com'},
    {'nombre':'Lucas', 'profesion':'Ingeniero', 'email':'lucas@gmail.com'},
    {'nombre':'Mateo', 'profesion':'Asistente', 'email':'mateo@gmail.com'},
  ];

  model:any={};
  model_edit:any={};

  adicionarEmpleado():void{
    // console.log(this.empleados);
    this.empleados.push(this.model);
    // Limpiar el modelo y el formulario
    this.model={};
    // Mostrar mensaje
    this.mensaje='Empleado adicionado';
  }
  eliminarEmpleado(i):void{
    if(confirm('Desea eliminar el empleado?')){
      this.empleados.splice(i, 1);
      this.mensaje='Empleado eliminado';
    }
  }
  indice;
  editarEmpleado(i):void{
    // Obtener los datos
    // console.log(i);
    this.model_edit.nombre=this.empleados[i].nombre;
    this.model_edit.profesion=this.empleados[i].profesion;
    this.model_edit.email=this.empleados[i].email;
    this.indice=i;
  }
  actualizarEmpleado():void{
    // console.log(this.model_edit);
    this.empleados[this.indice]=this.model_edit;
    // Limpiar el modelo y el formulario
    this.model_edit={};
    this.mensaje='Empleado actualizado';
  }
  closeAlert():void{
    this.mensaje=null;
  }
}

import { Component } from '@angular/core';
import { news } from '../../db/news.db';
import { INew } from '../../models/inew';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  
  arrayNews: INew[] = news.sort((a, b) => 
    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
  
  news: INew = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha : new Date()
  };
  
  imageUnfound: string='https://images.squarespace-cdn.com/content/v1/552966fce4b0bad8e3089670/1428798390946-OZ6K57K6I9ASYD028WZ3/UC+-+Company+Logo.jpg?format=1500w'

  guardarNoticia() {
  const errores: string[] = [];

  if (!this.news.titulo) {
    errores.push('- Título');
  }
  if (!this.news.descripcion) {
    errores.push('- Descripción');
  }
  if (!this.news.imagen) {
    errores.push('- URL de la imagen');
  }
  if (!this.news.fecha) {
    errores.push('- Fecha');
  }

  if (errores.length > 0) {
    alert('Campos obligatorios vacíos:\n' + errores.join('\n'));
    return;
  }

  this.arrayNews.unshift({ ...this.news });
  this.news = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: new Date()
  };
}

}

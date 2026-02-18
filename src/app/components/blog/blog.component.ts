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
    fecha: new Date()
  };

  guardarNoticia() {
    if (this.news.titulo && this.news.descripcion && this.news.imagen && this.news.fecha) {
      this.arrayNews.unshift({ ...this.news });
      this.news = {
        titulo: '',
        descripcion: '',
        imagen: '',
        fecha: new Date()
      };
    }
  }

}

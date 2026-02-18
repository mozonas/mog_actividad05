import { Component } from '@angular/core';
import { news } from '../../db/news.db';
import { INew } from '../../models/inew';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNews: INew[] = news.sort((a, b) => 
    new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

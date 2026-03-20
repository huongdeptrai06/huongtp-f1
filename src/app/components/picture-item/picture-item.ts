import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPicture } from '../../interface/picture';

@Component({
  selector: 'app-picture-item',
  standalone: true,
  imports: [],
  templateUrl: './picture-item.html',
  styleUrl: './picture-item.css',
})
export class PictureItem {
  @Input() picture!: IPicture;
  
  @Output() sendAuthor = new EventEmitter<{author: string, id: number}>();

  onChoose(){
    this.sendAuthor.emit({
      author: this.picture.author,
      id: +this.picture.id
    });
  }
}

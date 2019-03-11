import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent implements OnInit {

  @Input() src = '';
  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

}




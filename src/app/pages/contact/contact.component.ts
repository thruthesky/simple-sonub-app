import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AppContact } from 'src/app/services/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }


  onClickContact(item: AppContact) {
    console.log('contact item: ', item);
  }

}



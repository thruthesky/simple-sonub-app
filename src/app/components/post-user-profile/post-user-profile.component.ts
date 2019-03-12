import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-post-user-profile',
  templateUrl: './post-user-profile.component.html',
  styleUrls: ['./post-user-profile.component.scss']
})
export class PostUserProfileComponent implements OnInit {

  @Input() post: any;
  constructor(
    public a: AppService
  ) { }

  ngOnInit() {
  }

}


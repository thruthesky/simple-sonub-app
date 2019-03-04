import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() parent: Post & Comment;
    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    get mine() {
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
            return true;
        }
        return false;
    }

    onClickEdit() {
        if (this.parent.idx_parent === '0') {

        } else {

        }
    }

    onClickDelete() {

    }

    onClickVote(vote: 'G' | 'B') {

    }
}


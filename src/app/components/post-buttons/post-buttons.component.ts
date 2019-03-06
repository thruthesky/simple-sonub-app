import { Component, OnInit, Input } from '@angular/core';
import { Post, Comment } from 'modules/ng-simplest/simplest.interface';
import { AppService } from 'src/app/services/app.service';
import { AppSettingForum } from 'src/app/services/interfaces';

@Component({
    selector: 'app-post-buttons',
    templateUrl: './post-buttons.component.html',
    styleUrls: ['./post-buttons.component.scss']
})
export class PostButtonsComponent implements OnInit {

    @Input() parent: Post & Comment;
    @Input() forum: AppSettingForum;
    constructor(
        public a: AppService
    ) {
    }

    ngOnInit() {
    }

    /**
     * return current host url
     */
    get hostUrl(): string {
        return this.a.settings.site.url;
    }

    get forumType(): string {
        return this.forum.type;
    }

    get mine(): boolean {
        if (this.parent && this.parent.idx_user === this.a.sp.myIdx) {
            return true;
        }
        return false;
    }

    get postIdx() {
        if (this.parent.idx_root !== '0') {
            return this.parent.idx_root;
        } else if (this.parent.idx_parent !== '0') {
            return this.parent.idx_parent;
        } else {
            return this.parent.idx;
        }
    }
}


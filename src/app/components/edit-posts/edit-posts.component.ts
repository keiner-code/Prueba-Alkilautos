import { Component, EventEmitter, OnChanges, Output } from '@angular/core';
import { Posts, updatePostsDto } from 'src/app/models/posts.models';
import { PostsService } from 'src/app/services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css'],
})
export class EditPostsComponent {
  @Output() showEdit = new EventEmitter<boolean>();
  @Output() postEdit = new EventEmitter<Posts>();

  constructor(private service: PostsService) {}

  editform = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
    userId: new FormControl(),
  });

  updatePosts() {
    const { title, body, userId, id } = this.editform.value;
    const posts: updatePostsDto = {
      title,
      body,
      userId: parseInt(userId as string),
    };

    this.service.update(posts, id).subscribe((response) => {
      this.postEdit.emit(response);
      this.showEdit.emit(false);
    });
  }

  getByIdPosts(id: string) {
    this.service.getByIdPost(id).subscribe((item) => {
      this.editform.setValue({
        userId: String(item.id),
        title: item.title,
        body: item.body,
        id: item.id,
      });
    });
  }
}

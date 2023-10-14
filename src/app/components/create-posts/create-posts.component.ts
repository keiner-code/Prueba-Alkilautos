import { Component, EventEmitter, Output } from '@angular/core';
import { Posts, createPostsDto } from 'src/app/models/posts.models';
import { PostsService } from 'src/app/services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css'],
})
export class CreatePostsComponent {
  @Output() showCreate = new EventEmitter<boolean>();
  @Output() newPosts = new EventEmitter<Posts>();

  constructor(private service: PostsService) {}

  createform = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
  });

  createNewPosts() {
    if (this.createform.valid) {
      const { title, body, userId } = this.createform.value;
      const posts: createPostsDto = {
        title,
        body,
        userId: parseInt(userId as string),
      };

      this.service.create(posts).subscribe((response) => {
        this.newPosts.emit(response);
        this.showCreate.emit(false);
      });
    } else {
      alert('Por Favor Revise que no Tenga algun Campo Vacio');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Posts, Commnents } from 'src/app/models/posts.models';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Posts[] = [];
  comments: Commnents[] = [];
  showComments: boolean = false;
  showCreate: boolean = false;

  showEdit: boolean = false;

  constructor(private service: PostsService) {}
  ngOnInit(): void {
    this.service.getAllPosts().subscribe((response) => (this.posts = response)); //paginacion con userId
  }

  changeShowCreate(value: boolean) {
    this.showCreate = value;
  }

  changeShowEdit(value: boolean) {
    this.showEdit = value;
  }

  addNewPosts(data: Posts) {
    this.posts.unshift(data);
  }
  changePosts(data: Posts) {
    this.service.update(data, String(data.id)).subscribe((change) => {
      this.showEdit = false;
    });
  }

  getCommentsId(id: number) {
    this.service.getCommentsByIdPost(String(id)).subscribe((data) => {
      this.comments = data;
      this.showComments = true;
    });
  }
}

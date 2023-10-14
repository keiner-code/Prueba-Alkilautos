import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Posts,
  Commnents,
  createPostsDto,
  updatePostsDto,
} from '../models/posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Posts[]>(this.url);
  }
  getCommentsByIdPost(postId: string) {
    return this.http.get<Commnents[]>(`${this.url}/${postId}/comments`);
  }
  getByIdPost(id: string) {
    return this.http.get<Posts>(`${this.url}/${id}`);
  }
  create(data: createPostsDto) {
    return this.http.post<Posts>(this.url, data);
  }
  update(changes: updatePostsDto, id: string) {
    return this.http.put<Posts>(`${this.url}/${id}`, changes);
  }
}

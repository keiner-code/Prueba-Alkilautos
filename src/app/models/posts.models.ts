export interface Posts {
  userId: number | null | undefined;
  id: number;
  title: string | null | undefined;
  body: string | null | undefined;
}
export interface createPostsDto extends Omit<Posts, 'id'> {}

export interface Commnents {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface updatePostsDto extends Partial<createPostsDto> {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostsComponent } from './create-posts.component';

describe('CreatePostsComponent', () => {
  let component: CreatePostsComponent;
  let fixture: ComponentFixture<CreatePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostsComponent]
    });
    fixture = TestBed.createComponent(CreatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

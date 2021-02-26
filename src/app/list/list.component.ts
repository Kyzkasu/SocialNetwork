import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';
import { PostService } from './../@shared/service/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[];// = POSTS;

  constructor(private postService : PostService) { }

  getItem()
  {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
    this.getItem();
    console.log("posts > ", this.posts);

  }

  addItem(item: Post){
    this.postService.addPost(item).subscribe(post => {
      this.posts.push(post);
    });
  }
  delete(post)
  {
  this.postService.delete(post).subscribe(res => this.posts.filter(item => item.id !== post));
  }
  edit()
  {

  }

}

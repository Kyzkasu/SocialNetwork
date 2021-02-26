import { Component, Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Post } from '../@shared/models/post';
import { PostService } from '../@shared/service/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']

})
export class PostComponent implements OnInit, OnDestroy {
  bookTitleControl = new FormControl('');
  bookDescriptionControl = new FormControl('');
  
  @Input() VarPost:Post;
  

  collapsed: boolean;

  constructor(private postService : PostService) { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

  @Output() deleteEvent = new EventEmitter<string>();

  delete(post: Post) {
      this.deleteEvent.emit(post.id);
    }


  edit()
  {

  }

  submitBook(){

  }

}

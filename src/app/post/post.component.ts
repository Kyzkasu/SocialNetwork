import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';
import { Post } from '../@shared/models/post';



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

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

  submitBook(){

  }

}

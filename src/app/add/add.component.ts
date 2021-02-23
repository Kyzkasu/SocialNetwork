import { Component, OnInit, Output } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  profileForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
    description: new FormControl('')
  });

  @Output() addPostEvent = new EventEmitter<Post>();



  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    console.warn(this.profileForm.value);
  }
  createPost(){
    const post:Post = {
      id: IdGeneratorUtils.uuidv4(),
      title : this.profileForm.get("title").value,
      link: this.profileForm.get("link").value,
      }
      this.addPostEvent.emit(this.profileForm.value);
      this.profileForm.reset();
  }

}

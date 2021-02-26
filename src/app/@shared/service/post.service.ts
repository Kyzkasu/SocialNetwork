import { Injectable } from '@angular/core';
import { HttpClient }from "@angular/common/http";
import { Post } from "../models/post";
import { Observable } from "rxjs/internal/Observable";
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://crudcrud.com/api/89aa9290bad445e7ade4a32ef72b3cb1";
  
  crudcrudToken = "dzadzaza";
  
    
  constructor (
      private http: HttpClient) { }

     getPost() : Observable<any> {
         return this.http.get<Post>(this.url + "/posts");
     }  

     addPost(post:Post) : Observable<Post>
     {
        return this.http.post<Post>(this.url + "/posts", post);
     }
    
     delete(id : string): Observable<any> {
      return this.http.delete(`${this.url}/posts/${id}`);
    }
    update(id: string, data): Observable<any> {
      return this.http.put(`${this.url}/${id}`, data);
    }
  
   
}

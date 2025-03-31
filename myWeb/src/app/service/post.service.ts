import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
    providedIn:'root'
})

export class PostService{
 
    constructor(private http:HttpClient){}

    private BASICURL = 'http://localhost:8080/';

    createNewPost(data:any): Observable<any>{
        return this.http.post(BASIC_URL + `api/posts`, data);
    }

    getAllPosts(): Observable<any>{
        return this.http.get(BASIC_URL + `api/posts`);
    }


    likePost(postId:number): Observable<any>{
        console.info("PostId",postId);
        const params={
            postId: postId.toString()
        }
        return this.http.put<any>(BASIC_URL + `api/posts/${postId}/like`,null, {params});
    }

    // searchByName(name:string): Observable<any>{
    //     return this.http.get(BASIC_URL + `api/posts/search/${name}`);
    // }
    searchByKeyword(keyword: string): Observable<any> {
        return this.http.get(BASIC_URL+ `api/posts/search/${keyword}`);
      }

      getPostById(postId: string): Observable<any> {
        return this.http.get(BASIC_URL + `api/posts/${postId}`);
    }

    getMyPosts(postedBy: string): Observable<any> {
        console.log(postedBy);    
        return this.http.get(BASIC_URL + `api/posts/user/id/${postedBy}`);
      }

    //       getPostsByUserId(userId: number): Observable<any> {
    //     return this.http.get(BASIC_URL + `api/posts/user/${userId}`);
    // }
}

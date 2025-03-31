import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
    providedIn:'root'
})

export class Commentservice{
    constructor(private http: HttpClient){}

    createComment(postId:number, postedBy:string, content:string) :Observable<any>{
        console.info("PostId",postId);
        const params={
            postId: postId.toString(),
            postedBy: postedBy,
            content: content
        }
        return this.http.post<any>(BASIC_URL + `api/comments/create`,null, {params});
    }

    getAllCommentBypost(postId:number): Observable<any>{
        return this.http.get(BASIC_URL+ `api/comments/${postId}`);
    }
}
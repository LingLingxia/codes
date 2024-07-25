import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http"
import { WishItem } from 'src/shared/models/wishItem';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  private getStandardOptions(): any{
    return {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
  }

  getWishes(){
    let options = this.getStandardOptions();
    options.params = new HttpParams({
        fromObject:{
          format:'json'
        }
    });
    //assets/wishes.json?format=json
    return this.http.get("assets/wishes.json",options).pipe(catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse){
    if(error.status ===0){
      console.error("There is an issue with the client or network:",error.error)
    }else{
      console.error("server-side error",error.error);
    }
    return throwError(()=>new Error("Can not retrieve wishes from the server,please try again."))
  }

  private addWish(wish:WishItem){
    let options = this.getStandardOptions();
    options.headers = options.headers.set("Authorization","Bearer XXXXXXXXXX")
    this.http.post("assets/wishes.json",wish,options);
  }

}

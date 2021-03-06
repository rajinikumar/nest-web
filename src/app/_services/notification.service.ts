import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';


@Injectable({
    providedIn: 'root'
  })

  export class NotificationService{
      private baseUrl = environment.appUrl + '/api/v1/users';

      constructor(private http: HttpClient, 
                  private authenticationService: AuthenticationService) { }

      // getNotification(notification: Array<object>): Observable<object> {
          
      //   return this.http.get(`${this.baseUrl}`, this.authenticationService.getHttpHeaders());       
       
      // }

      getNotifications(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/${id}/notifications`, this.authenticationService.getHttpHeaders());
      }

      inActivateNotifications(id: number): Observable<any>{
        return this.http.post(`${this.baseUrl}/${id}/notifications`, this.authenticationService.getHttpHeaders());

      }

      

  }
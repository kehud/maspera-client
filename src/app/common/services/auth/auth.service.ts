import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IToken } from '../../interfaces/itoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

    //headers
    private headers: object = {
      "Accept": "*/*",
      "access-control-allow-origin": "*",
      "Content-Type": "application/x-www-form-urlencode"
    };
    

    public signIn(username, password) {
      
      let params = new HttpParams();
      params = params.append('UserName', username);
      params = params.append('Password', password);
      params = params.append('grant_type', "password");
      
      return new Promise((resolve, reject) => {
        this.httpClient.post(`${environment.api}/token`, 
        params,
        this.headers 
        )
          .toPromise()
          .then((token: IToken) => {
            this.setToken(token);
            return resolve(token);
          })
          .catch(error => {
            return reject(error.error.error_description);
          });
      });
    }

    private setToken(token: IToken) {
      localStorage.setItem('token', token['access_token']);
      localStorage.setItem('tokenExpire', token['.expires']);;
    }

    public getToken() {
      const token = localStorage.getItem('token');
      const expire = localStorage.getItem('tokenExpire');
      if (!token && !expire) {
        return null;
      }
  
      const now = new Date().getTime();
      const exp = new Date(expire).getTime();
  
      if (now >= exp) {
        this.removeToken();
        return null;
      }
  
      return localStorage.getItem('token');
    }
  
    private removeToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpire');
    }

}

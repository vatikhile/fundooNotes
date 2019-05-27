
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  //It hit the API for login ,forgot and register purpose
  postRequest(url, data) {
    return this.http.post(this.baseUrl + url, data)
  }
  //It make the data into encoded format
  getEncodData(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  //It hit the API for reset the password
  post(url, data) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.log('token in s', localStorage.getItem('token'));
    return this.http.post(this.baseUrl + url, this.getEncodData(data), httpOptions);
  }
  //It hit the API for adding the new note in the database
  addNotes(url, data) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')

      })

    };
    console.log("token--------->", localStorage.getItem('token'));
    return this.http.post(this.baseUrl + url, data, httpOptions)


  }
  //It hit the API for getting the note which is added in the database
    getData(url) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')

      })

    };
    console.log("token--------->", localStorage.getItem('token'));
    return this.http.get(this.baseUrl + url, httpOptions)

  }
  postEdit(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(this.baseUrl + url, data, httpOptions);
  }
  showLabel(url) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.get(this.baseUrl + url, httpOptions);


  }
  delete(url){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('Id')
      })

  }
  return this.http.delete(this.baseUrl+url,httpOptions);
}
postEd(url, data) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  }
  return this.http.post(this.baseUrl + url, data, httpOptions);
}

}
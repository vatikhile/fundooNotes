import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { log } from 'util';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
baseUrl=environment.baseUrl;
	constructor(private http:HttpClient ) { }
	postRequest(url,data)
{
return this.http.post(this.baseUrl+url,data)
}
getEncodData(toConvert) {
	const formBody = [];
	for (const property in toConvert) {
	const encodedKey = encodeURIComponent(property);
	const encodedValue = encodeURIComponent(toConvert[property]);
	formBody.push(encodedKey + '=' + encodedValue);
	}
	return formBody.join('&');
	}

post(url, data) {
	const httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': localStorage.getItem('token')
		})
	};
	console.log('token in s',localStorage.getItem('token')
	);
	return this.http.post(this.baseUrl + url,this.getEncodData(data), httpOptions);
}

}

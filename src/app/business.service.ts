import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:3000/business';


  constructor(private http: HttpClient) { }

  addBusiness(name, email, mobile_number, skills, college_name, degree, designation, experience, company_names) {
    const obj = {
      name: name,
      email: email,
      mobile_number: mobile_number,
      skills: skills,
      college_name: college_name,
      degree: degree,
      designation: designation,
      experience: experience,
      company_names: company_names

    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this.http.get(`${this.uri}`);
  }

  editBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

    name: String;
    email: String;
    mobile_number: String;
    skills: String;
    college_name: String;
    degree: String;
    designation: String;
    experience: String;
    company_names: String;
   
    updateBusiness(name, email, mobile_number, skills, college_name, degree, designation, experience, company_names, id) {
    const obj = {
      name: name,
      email: email,
      mobile_number: mobile_number,
      skills: skills,
      college_name: college_name,
      degree: degree,
      designation: designation,
      experience: experience,
      company_names: company_names

    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
  }



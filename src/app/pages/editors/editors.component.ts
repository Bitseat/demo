


import { BusinessService } from '../../business.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
 
  PDFSource,
} from 'ng2-pdf-viewer';
import Business from '../../Business_model';
import { getUrlScheme } from '@angular/compiler';


@Component({
  selector: 'ngx-editors',
  styleUrls: ['./editors.component.scss'],
  templateUrl: './editors.component.html',
  
})

export class EditorsComponent implements OnInit {

  gst_editForm;
  business: any = {};
 
  
  
  pdfSrc: string | PDFSource | ArrayBuffer =  "/assets/Yenat.pdf"
  // will change this once the upload directory is changed to assets
  //pdfSrc = geturl();
  
 //pdfSrc: string | PDFSource | ArrayBuffer = this.parsedURL//.split('..')[1];
  

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private bs: BusinessService, private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.gst_editForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile_number: ['', Validators.required],
      skills: ['', Validators.required],
      college_name: ['', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      experience: ['', Validators.required],
      company_names: ['', Validators.required]
    });
  }

  updateBusiness(name, email, mobile_number, skills, college_name, degree, designation, experience, company_names) {
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(name, email, mobile_number, skills, college_name, degree, designation, experience, company_names, params['id']);

      this.router.navigate(['business']);
      this.router.navigate(['/pages/business']);
      console.log("updating data");
      console.log(name, email, mobile_number);
    });
  }

  getUrl(){
    let url = 'http://localhost:4200../resume_extraction/resumes/Yenat.pdf'
  
    let splitted = url.split('..')
    console.log(splitted[0])
    console.log(splitted[1])
    let splittedpdf =splitted[1]
    console.log(splittedpdf)
    console.log(splittedpdf )
    return splittedpdf 
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
 
}


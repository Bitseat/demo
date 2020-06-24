import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../../business.service';


@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html'
})


export class GstEditComponent implements OnInit {

  gst_editForm;
  business: any = {};

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
      console.log("updating data");
      console.log(name, email, mobile_number);
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.business = res;
      });
    });
  }
}

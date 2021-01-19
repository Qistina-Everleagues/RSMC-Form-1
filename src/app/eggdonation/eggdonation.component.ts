import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css']
})
export class EggdonationComponent implements OnInit {

  showForm: boolean = true;

  form: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    streetAdd: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl(0, Validators.required),
    outside_USA: new FormControl('', Validators.required),
    city_country_residence: new FormControl('', Validators.required),
    zip_code: new FormControl('', Validators.required),
    telephone_number: new FormControl('', Validators.required),
    contact_method: new FormControl(0, Validators.required),
    others_contact_method: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    experience: new FormControl(0, Validators.required),
    race: new FormControl('', Validators.required),
    registered_BIA: new FormControl(0, Validators.required),
    height: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    eye_color: new FormControl(0, Validators.required),
    hair_color: new FormControl(0, Validators.required),
    bloodType: new FormControl(0, Validators.required),
    medications: new FormControl(0, Validators.required),
    why_date_last_used: new FormControl('', Validators.required),
    bioChildren: new FormControl('', Validators.required),
    list_ages_children: new FormControl('', Validators.required),
    hear_about_us: new FormControl(0, Validators.required),
    explain_about_us: new FormControl('', Validators.required),
    highest_level_education: new FormControl(0, Validators.required),
    explain_other: new FormControl('', Validators.required),
    yes_positive_carrier: new FormControl('', Validators.required),
    preferred_languange: new FormControl(0, Validators.required),
    others_languange: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
      /* this.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      }) */
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
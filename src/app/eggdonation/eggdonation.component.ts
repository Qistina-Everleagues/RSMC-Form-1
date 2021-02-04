import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css']
})
export class EggdonationComponent implements OnInit {

  showForm: boolean = true;
  eye_color = new FormControl('', [Validators.required]);
  registered_BIA = new FormControl('', [Validators.required]);
  hair_color = new FormControl('', [Validators.required]);
  bloodType = new FormControl('', [Validators.required]);
  medications = new FormControl('', [Validators.required]);
  highest_level_education = new FormControl('', [Validators.required]);

  form: FormGroup = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    streetAdd: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(0),
    outside_USA: new FormControl(''),
    city_country_residence: new FormControl('', Validators.required),
    zip_code: new FormControl(''),
    telephone_number: new FormControl('', Validators.required),
    contact_method: new FormControl(0),
    others_contact_method: new FormControl(''),
    birthDate: new FormControl('', Validators.required),
    experience: new FormControl(0),
    race: new FormControl(''),
    height_feet: new FormControl('', Validators.required),
    height_in: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    why_date_last_used: new FormControl(''),
    bioChildren: new FormControl(''),
    list_ages_children: new FormControl(''),
    hear_about_us: new FormControl(0),
    explain_about_us: new FormControl(''),
    explain_other: new FormControl(''),
    yes_positive_carrier: new FormControl(''),
    preferred_languange: new FormControl(0),
    others_languange: new FormControl('')
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
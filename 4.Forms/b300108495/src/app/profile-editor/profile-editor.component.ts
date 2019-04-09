import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ProfileListService} from './profile-list.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  Profile = [];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
  }
  constructor(private profileListService: ProfileListService) {
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Safaa',
      address: {
        street: '123 Drew Street'
      }
    })
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
  ngOnInit() {
    console.log('populate data');
    this.profileListService.getData()
      .subscribe(
        (data: any) => this.Profile = data
        , (err: any) => console.error('too bad' + err)
      );
  };
}

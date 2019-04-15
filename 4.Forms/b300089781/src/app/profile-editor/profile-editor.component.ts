import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ProfileEditorService} from './profile-editor.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor(private profileEditorService: ProfileEditorService) {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.profileEditorService.setData(this.profileForm.value);
    console.log(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}

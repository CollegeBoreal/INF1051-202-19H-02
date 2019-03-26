import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ColorsListService} from './services/colors-list.service';

const BASE_MODULES = [ CommonModule, HttpClientModule ];
const SERVICES = [ColorsListService];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BASE_MODULES
  ],
  providers: [
    ...SERVICES,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}

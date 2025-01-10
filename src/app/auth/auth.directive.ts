import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' })
  private authService = inject(AuthService)

  constructor() { 
    effect(() => {
      console.log(this.authService.activePermission())
      console.log(this.userType())
      if(this.authService.activePermission() === this.userType()) {
        console.log("SHOW ELEMENT")
      } else {
        console.log("DO NOT SHOW ELEMENT")
      }
    })
  }

}

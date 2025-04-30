import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthServiceService } from '../Service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    alert('You must be logged in to access this page.');
    router.navigate(['/']);
    return false;
  }
};

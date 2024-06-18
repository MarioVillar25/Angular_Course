import { Component, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrl: './layout-dashboard.component.css',
})
export class LayoutDashboardComponent {
  private authService = inject(AuthService);

  get user() {
    return this.authService.currentUser();
  }

  logout(): void {
    this.authService.authStatus();
  }
}

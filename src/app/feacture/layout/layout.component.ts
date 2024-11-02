import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { FooterComponent } from '@shared/componets/footer/footer.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzLayoutModule,
    RouterOutlet,
    RouterModule,
    NzButtonModule,
    NzPageHeaderModule,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private router: Router) {}
  isCollapsed = false;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  home() {
    this.router.navigate(['/home/']);
  }
}

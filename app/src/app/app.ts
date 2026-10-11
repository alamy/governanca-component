import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../stories/header.component';
import type { User } from '../stories/user';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly user = signal<User | null>(null);

  protected login(): void {
    this.user.set({ name: 'Jane Doe' });
  }

  protected logout(): void {
    this.user.set(null);
  }

  protected createAccount(): void {
    this.user.set({ name: 'Jane Doe' });
  }
}

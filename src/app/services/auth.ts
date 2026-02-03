import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

type User = {
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private router = inject(Router);
  user = signal<User|undefined>(JSON.parse(localStorage.getItem('usedev-user')!));
  isLogged = computed(() => Boolean(this.user()));


  saveEff = effect(() => {
    const user = this.user();
    if (user) {
      localStorage.setItem('usedev-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('usedev-user');
      this.router.navigateByUrl('/products');
    }
  })

  login(): void {
    this.user.set({ username: 'rpaivabr', email: 'rafael@paiva.com' });
  }

  logout(): void {
    this.user.set(undefined);
  }
}

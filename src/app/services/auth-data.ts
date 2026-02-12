import { computed, effect, Injectable, signal } from '@angular/core';

interface User {
  username: string;
  email: string;
  role: string;
}

const LOCALSTORAGE_KEY = 'usedev-user'

@Injectable({
  providedIn: 'root',
})
export class AuthData {
  user = signal<User | undefined>(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)!));
  isLogged = computed(() => Boolean(this.user()));

  saveUserEffect = effect(() => {
    const user = this.user();
    if (Boolean(user)) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(LOCALSTORAGE_KEY);
    }
  })

  login(): void {
    this.user.set({ username: 'rpaivabr', email: 'rafael@paiva.com', role: 'admin' });
  }

  logout(): void {
    this.user.set(undefined);
  }
}

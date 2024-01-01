import { Injectable } from '@angular/core';
import { NavigationRoute } from '../ui/navigation/navigation.model';

const HISTORY_KEY = 'navigation_history';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: NavigationRoute[] = [];

  constructor() {
    // Recover history from localStorage when initializing service
    const storedHistory = localStorage.getItem(HISTORY_KEY);
    this.history = storedHistory ? JSON.parse(storedHistory) : [];
  }

  private saveHistoryToLocalStorage(): void {
    // Store current history in localStorage
    localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history));
  }

  setToHistory(page: NavigationRoute): void {
    if (
      !this.history.some((route: NavigationRoute) => page.title === route.title)
    ) {
      this.history.push(page);
      this.saveHistoryToLocalStorage();
    }
  }

  getHistory(): NavigationRoute[] {
    return [...this.history];
  }

  deleteRoute(routeToDelete: string): void {
    const newArray = this.history.filter(
      (obj: NavigationRoute) => obj.title !== routeToDelete
    );
    this.history = newArray;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history));
  }
}

class MessageBus {
  private events: { [key: string]: { [id: string]: (data: any) => void } } = {};
  
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
  }

  subscribe(event: string, callback: (data: any) => void): string {
    if (!this.events[event]) {
      this.events[event] = {};
    }

    const id = this.generateId();
    this.events[event][id] = callback;
    return id;
  }

  publish(event: string, data: any): void {
    if (this.events[event]) {
      Object.values(this.events[event]).forEach((callback) => callback(data));
    }
  }

  unsubscribe(event: string, id?: string): void {
    if (!this.events[event]) return;

    if (id) {
      delete this.events[event][id];
      if (Object.keys(this.events[event]).length === 0) {
        delete this.events[event];
      }
    } else {
      delete this.events[event];
    }
  }
}

export const messageBus = new MessageBus();

// Registrar el MessageBus en window
if (typeof window !== 'undefined') {
  (window as any).messageBus = messageBus;
}

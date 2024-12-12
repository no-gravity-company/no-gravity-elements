class MessageBus {
  private events: { [key: string]: Array<(data: any) => void> } = {};

  subscribe(event: string, callback: (data: any) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event]!.push(callback);
  }

  publish(event: string, data: any): void {
    if (this.events[event]) {
      this.events[event]!.forEach((callback) => callback(data));
    }
  }

  unsubscribe(event: string, callback: (data: any) => void): void {
    if (this.events[event]) {
      this.events[event] = this.events[event]!.filter((cb) => cb !== callback);
    }
  }
}

export const messageBus = new MessageBus();

// Registrar el MessageBus en el objeto global
if (typeof window !== 'undefined') {
  (window as any).messageBus = messageBus;
}

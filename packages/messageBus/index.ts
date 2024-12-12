class MessageBus {
  private events: { [key: string]: Array<(data: any) => void> } = {};

  // Suscripción a cualquier clave con cualquier tipo de datos
  subscribe(event: string, callback: (data: any) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event]!.push(callback);
  }

  // Publicación a cualquier clave con cualquier tipo de datos
  publish(event: string, data: any): void {
    if (this.events[event]) {
      this.events[event]!.forEach((callback) => callback(data));
    }
  }

  // Cancelar suscripción
  unsubscribe(event: string, callback: (data: any) => void): void {
    if (this.events[event]) {
      this.events[event] = this.events[event]!.filter((cb) => cb !== callback);
    }
  }
}

// Instancia del MessageBus exportada
export const messageBus = new MessageBus();

// Registrar el MessageBus en el objeto global
if (typeof window !== 'undefined') {
  (window as any).messageBus = messageBus;
}

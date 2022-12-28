import EventEmitter3 from 'eventemitter3';

export const EVENT_POPUP_CLOSE = 'event-popup-close';

class EventEmitter extends EventEmitter3 {
  // 是否打开调试日志
  debug: boolean = false;

  setDebug(debug: boolean): void {
    this.debug = debug;
  }

  addListener<T extends string | symbol>(event: T, fn: (...args: any[]) => void, context?: any): this {
    super.addListener(event, fn, context);
    this.debug && console.log(`Event.addListener:`, event);
    return this;
  }

  on<T extends string | symbol>(event: T, fn: (...args: any[]) => void, context?: any): this {
    super.on(event, fn, context);
    this.debug && console.log(`Event.addListener:`, event);
    return this;
  }

  once<T extends string | symbol>(event: T, fn: (...args: any[]) => void, context?: any): this {
    super.once(event, fn, context);
    this.debug && console.log(`Event.addListener:`, event, 'once');
    return this;
  }

  emit<T extends string | symbol>(event: T, ...args: any[]): boolean {
    const ret = super.emit(event, ...args);
    this.debug && console.log(`Event.emit:`, event, ...args);
    return ret;
  }

  removeListener<T extends string | symbol>(event: T, fn?: ((...args: any[]) => void) | undefined, context?: any, once?: boolean | undefined): this {
    super.removeListener(event, fn, context, once);
    this.debug && console.log(`Event.removeListener:`, event);
    return this;
  }

  off<T extends string | symbol>(event: T, fn?: ((...args: any[]) => void) | undefined, context?: any, once?: boolean | undefined): this {
    super.off(event, fn, context, once);
    this.debug && console.log(`Event.removeListener:`, event);
    return this;
  }

  removeAllListeners(event?: string | symbol | undefined): this {
    super.removeAllListeners(event);
    this.debug && console.log(`Event.removeAllListeners:`, event);
    return this;
  }
}

export const Event = new EventEmitter();

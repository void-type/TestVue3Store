import { reactive, readonly } from 'vue';

// https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f
export default abstract class StoreAbstract<T extends Record<string, any>> {
  protected state: T;

  constructor() {
    const data = this.data();
    this.state = reactive(data) as T;
  }

  protected abstract data(): T

  public getState(): T {
    return readonly(this.state) as T;
  }
}

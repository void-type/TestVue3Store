import { reactive, readonly } from 'vue';

// https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f
export default abstract class StoreAbstract<T extends Record<string, any>> {
  protected internalState: T;

  constructor(initialState: T) {
    this.internalState = reactive(initialState) as T;
  }

  public get state(): T {
    return readonly(this.internalState) as T;
  }
}

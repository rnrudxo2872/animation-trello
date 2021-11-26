import { BroswerStorageMapper } from "./BroswerMapper";

export class BrowserStorage<E> {
  private key: string;
  private mapper: BroswerStorageMapper<E>;

  constructor(key: string, mapper: BroswerStorageMapper<E>) {
    this.key = key;
    this.mapper = mapper;
  }

  get(): E {
    return this.mapper.getFromJson(localStorage.getItem(this.key));
  }

  set(data: E) {
    localStorage.setItem(this.key, this.mapper.toJson(data));
  }

  clear() {
    localStorage.removeItem(this.key);
  }

  isEmpty() {
    return localStorage.getItem(this.key) == null;
  }
}

import { CacheStorage } from "./CacheStorage";

/**
 * @summary 세션 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 * @scope 세션(탭)
 */
export default class CacheStorageOfSession implements CacheStorage {
  constructor() {
    console.log("create CacheStorage Of Session");
  }

  set(key: string, value: any): boolean {
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  get(key: string) {
    const objectJson: string | null = sessionStorage.getItem(key);
    if (objectJson != null) {
      return JSON.parse(objectJson);
    }
    return undefined;
  }
  del(key: string): void {
    sessionStorage.removeItem(key);
  }
  has(key: string): boolean {
    return sessionStorage.getItem(key) != null ? true : false;
  }
  reset() {
    sessionStorage.clear();
  }
}

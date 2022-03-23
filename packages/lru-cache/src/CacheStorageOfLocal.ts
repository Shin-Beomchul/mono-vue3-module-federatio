import { CacheStorage } from "./CacheStorage";

/**
 * @summary 로컬 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 *
 * @scope 도메인간 공유 but, 서브도메인 공유 x
 */
export default class CacheStorageOfLocal implements CacheStorage {
  constructor() {
    console.log("create CacheStorage Of Local");
  }

  set(key: string, value: any): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  get(key: string) {
    const objectJson: string | null = localStorage.getItem(key);
    if (objectJson != null) {
      return JSON.parse(objectJson);
    }
    return undefined;
  }
  del(key: string): void {
    localStorage.removeItem(key);
  }
  has(key: string): boolean {
    return localStorage.getItem(key) != null ? true : false;
  }
  reset() {
    localStorage.clear();
  }
}

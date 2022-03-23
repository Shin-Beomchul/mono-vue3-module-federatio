/** 캐시 저장소 인터페이스
 *
 * @author Shin BeomChul
 * @since 21.12.09
 * @example
 *     class CacheStorageOfLocal extends CacheStorage{...}
 *     class CacheStorageOfSession extends CacheStorage{...}
 *     class CacheStorageOfAndroidSQL extends CacheStorage{...}
 *     ...
 * */
export interface CacheStorage {
    set(key: string, value: any): boolean;
    get(key: string): any | undefined;
    del(key: string): void;
    has(key: string): boolean;
    reset(): any;
}

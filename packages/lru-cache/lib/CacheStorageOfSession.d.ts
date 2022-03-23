import { CacheStorage } from "./CacheStorage";
/**
 * @summary 세션 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 * @scope 세션(탭)
 */
export default class CacheStorageOfSession implements CacheStorage {
    constructor();
    set(key: string, value: any): boolean;
    get(key: string): any;
    del(key: string): void;
    has(key: string): boolean;
    reset(): void;
}

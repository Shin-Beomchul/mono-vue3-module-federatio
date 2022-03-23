import { CacheStorage } from "./CacheStorage";
import { PresitentType } from "./PresitentType";
/**
 *
 * @author Shin BeomChul
 * @since 21.12.09
 */
export default class PersistentLruCache<V> {
    private CAPACITY;
    private savedKeys;
    private cacheStorage;
    constructor(presitentType: PresitentType, options: {
        max: number;
    });
    switch(cacheStorage: CacheStorage): this;
    /**
     * @summary 캐시저장
     * @param value Json직렬화 가능 객체
     * @return success then true
     * @caution Json화 가능한 객체만 지원.
     */
    setStorage(key: string, value: V): boolean;
    /**
     * @summary 캐시 가져오기
     * @param key key
     * @return Json을 역직렬화한 객체
     * @caution Json화 가능한 객체만 지원.
     */
    getStorage(key: string): V | undefined;
    /**
     * @summary 캐싱 여부
     * @param key 확인 key
     * @returns has then true
     */
    isHit(key: string): boolean;
    /**
     * @summary 캐시삭제
     * @param key 삭제대상 key
     * @returns void
     */
    delStorage(key: string): void;
    clearCaches(): void;
}

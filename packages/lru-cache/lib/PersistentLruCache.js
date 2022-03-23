import CacheStorageOfLocal from "./CacheStorageOfLocal";
import CacheStorageOfSession from "./CacheStorageOfSession";
import { PresitentType } from "./PresitentType";
/**
 *
 * @author Shin BeomChul
 * @since 21.12.09
 */
export default class PersistentLruCache {
    constructor(presitentType, options) {
        this.savedKeys = [];
        this.CAPACITY = options.max;
        switch (presitentType) {
            case PresitentType.Local:
                this.cacheStorage = new CacheStorageOfLocal();
                break;
            case PresitentType.Session:
                this.cacheStorage = new CacheStorageOfSession();
                break;
            default:
                this.cacheStorage = new CacheStorageOfSession();
        }
        this.savedKeys =
            this.cacheStorage.get("cacheSavedKeys") || [];
    }
    switch(cacheStorage) {
        this.cacheStorage = cacheStorage;
        return this;
    }
    /**
     * @summary 캐시저장
     * @param value Json직렬화 가능 객체
     * @return success then true
     * @caution Json화 가능한 객체만 지원.
     */
    setStorage(key, value) {
        // 캐시 사이즈 보다 크면 가장 오래된 데이터 삭제.
        if (this.savedKeys.length >= this.CAPACITY) {
            this.savedKeys = this.savedKeys.splice(-this.CAPACITY, this.savedKeys.length);
            const firstKey = this.savedKeys.shift();
            if (firstKey != undefined)
                this.cacheStorage.del(firstKey);
        }
        // 같은 key 있을 경우 업데이트
        if (this.savedKeys.includes(key)) {
            this.cacheStorage.set(key, value);
            // 신규 key
        }
        else {
            // 신규 캐시 데이터 추가
            this.cacheStorage.set(key, value);
            // 키 업데이트
            this.savedKeys.push(key);
            this.cacheStorage.set("cacheSavedKeys", this.savedKeys);
        }
        return true;
    }
    /**
     * @summary 캐시 가져오기
     * @param key key
     * @return Json을 역직렬화한 객체
     * @caution Json화 가능한 객체만 지원.
     */
    getStorage(key) {
        return this.cacheStorage.get(key);
    }
    /**
     * @summary 캐싱 여부
     * @param key 확인 key
     * @returns has then true
     */
    isHit(key) {
        return this.cacheStorage.has(key);
    }
    /**
     * @summary 캐시삭제
     * @param key 삭제대상 key
     * @returns void
     */
    delStorage(key) {
        this.cacheStorage.del(key);
    }
    clearCaches() {
        this.savedKeys.forEach((key) => this.cacheStorage.del(key));
        this.savedKeys = [];
        this.cacheStorage.set("cacheSavedKeys", this.savedKeys);
    }
}
//# sourceMappingURL=PersistentLruCache.js.map
// シンプルなメモリキャッシュ実装
interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

class MemoryCache {
  private cache = new Map<string, CacheItem<unknown>>();
  private readonly maxSize = 100; // 最大100エントリ

  set<T>(key: string, data: T, ttlMinutes: number = 5): void {
    // キャッシュサイズ制限
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlMinutes * 60 * 1000,
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }

    // TTLチェック
    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data as T;
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  // 期限切れエントリを削除
  cleanup(): void {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
      }
    }
  }

  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
    };
  }
}

// グローバルキャッシュインスタンス
export const searchCache = new MemoryCache();
export const optionsCache = new MemoryCache();

// 定期的なクリーンアップ（5分ごと）
if (typeof window === 'undefined') {
  setInterval(() => {
    searchCache.cleanup();
    optionsCache.cleanup();
  }, 5 * 60 * 1000);
}
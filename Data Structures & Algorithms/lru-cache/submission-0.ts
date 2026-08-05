class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    cache: Map<any, any>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        // we need to set this as recently used:

        const res = this.cache.get(key);

        // this is done to preserve the priority
        this.cache.delete(key);
        this.cache.set(key, res);

        return res;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (!this.cache.has(key)) {
            // this mean we will create a new pair of key-value
            // we must check the capacity
            if (this.cache.size == this.capacity) {
                const leastRecentlyUsedKey = this.cache.keys().next().value;
                this.cache.delete(leastRecentlyUsedKey);
            }
            this.cache.set(key, value);
        } else {
            this.cache.delete(key);
            this.cache.set(key, value);
        }
    }
}

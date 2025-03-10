/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    
    // Move accessed key to the end to mark it as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // Remove the least recently used item (first key in Map)
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
    
    this.cache.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/* 


The LRU Cache implementation using Map is non-linear because:

get(key) operation:

this.cache.has(key): O(1)
this.cache.get(key): O(1)
this.cache.delete(key): O(1)
this.cache.set(key, value): O(1)
Total: O(1)
put(key, value) operation:

this.cache.has(key): O(1)
this.cache.delete(key): O(1) (only if key exists)
this.cache.size >= this.capacity: O(1)
this.cache.keys().next().value: O(1) (fetching the first key)
this.cache.delete(firstKey): O(1)
this.cache.set(key, value): O(1)
Total: O(1)
Since all operations are O(1) and do not depend on the size of the cache (capacity), 
the algorithm is constant time (O(1)) and non-linear in behavior.

If an implementation used an array instead of a Map, operations like deletion or
 updating the order would take O(n), making it linear. But here, 
we use a hashmap (Map) + ordering, ensuring O(1) operations, which is non-linear.
*/
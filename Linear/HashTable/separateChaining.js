class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(key, value) {
      const newNode = new Node(key, value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  class HashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size).fill(null);
    }
    _hash(key) {
      let hash = 0;
      for (const char of key) {
        hash += char.charCodeAt(0);
      }
      return hash % this.size;
    }
    set(key, value) {
      let index = this._hash(key);
      if (!this.table[index]) {
        this.table[index] = new LinkedList();
      }
      this.table[index].append(key, value);
    }
    get(key) {
      let index = this._hash(key);
      let bucket = this.table[index] ? this.table[index].head : null;
      while (bucket) {
        if (bucket.key == key) {
          return bucket.value;
        }
        bucket = bucket.next;
      }
      return undefined; // Return undefined for keys that don't exist
    }
  }
  
  const hashTable = new HashTable(10);
  hashTable.set("apple", 20);
  hashTable.set("appel", 50);
  hashTable.set("grapes", 45);
  
  console.log(hashTable.get("apple")); // Output: 20
  console.log(hashTable.get("appel")); // Output: 50
  console.log(hashTable.get("grapes")); // Output: 45
  console.log(hashTable.get("banana")); // Output: undefined (key doesn't exist)
  
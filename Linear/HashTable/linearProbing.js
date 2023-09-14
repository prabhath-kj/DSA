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
      let i = 0;
      while (this.table[index] !== null) {
        index = (index + i) % this.size; // Updated this line
        i++;
      }
      this.table[index] = { key, value };
    }
    get(key) {
      let index = this._hash(key);
      let i = 0;
      while (this.table[index] !== null) {
        if (this.table[index].key == key) {
          return this.table[index].value;
        }
        index = (index + i) % this.size; // Updated this line
        i++;
      }
  
      return false;
    }
  }
  
  const hashTable = new HashTable(10);
  hashTable.set("apple", 20);
  hashTable.set("orange", 50);
  hashTable.set("grapes", 45);
  hashTable.set("appel", 999);
  hashTable.set("ornage", 9);
  
  console.log(hashTable.get("ornage")); // Output: 999
  
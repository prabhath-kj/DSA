class HashTable {
  constructor(size) {
    this.size=size
    this.table=new Array(size).fill(null)
  }
  _hash(key){
    let hash=0
    for(const char of key){
        hash+=char.charCodeAt(0)
    }
    return hash%this.size
  }
  set(key,value){
    let index=this._hash(key)
    if(!this.table[index]){
        this.table[index]=[]
    }
    this.table[index].push({key,value})
  }
  get(key){
    let index=this._hash(key)
    let bucket=this.table[index]
    for(const paire of bucket){
        if(paire.key==key){
            return paire.value
        }
    }
    return false
  }
  delete(key){
    let index=this._hash(key)
    let bucket=this.table[index]
    for (let i = 0; i< bucket.length; i++) {
        if(bucket[i].key==key){
         bucket.splice(i,1)
         return
        }
    }
    return false
  }
}

const hasTable=new HashTable(10)
hasTable.set("apple",20)
hasTable.set("orange",50)
hasTable.set("grapes",45)
hasTable.delete("apple")
console.log(JSON.stringify(hasTable));
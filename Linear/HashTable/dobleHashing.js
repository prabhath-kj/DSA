class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size).fill(null)
    }

    _hash(key){
        let hash=0
        for (const char of key){
            hash+=char.charCodeAt(0)
        }
        return hash%this.size
    }
    hash2(key){
        return 7-(key.length % 7)
    }
    dobleHash(key,index,attempt){
        let newindex=this.hash2(key)
        return index+(attempt*newindex)%this.size
    }
    set(key ,value){
        let index=this._hash(key)
        let attempt=1
        let newIndex=index
        while(this.table[newIndex]!==null){
            newIndex=this.dobleHash(key,index,attempt)
            attempt++
        }
        this.table[newIndex]={key,value}


    }
    get(key){
        let index=this._hash(key)
        let attempt=1
        let newIndex=index
        while(this.table[newIndex]!==null){
            if(this.table[newIndex].key==key){
                return this.table[newIndex].value
            }
            newIndex=this.dobleHash(key,index,attempt)
            attempt++
        }
        return false
    }
}

const myHash=new HashTable(10)
myHash.set("apple",20)
myHash.set("orange",0)
myHash.set("appel",29)
myHash.set("apepl",39)
console.log(JSON.stringify(myHash.get("orange")));
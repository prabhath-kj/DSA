class HashTable{
    constructor(initialSize=3,maxLoad=0.75){
        this.size=initialSize
        this.count=0
        this.table=new Array(this.size).fill(null)
        this.maxLoad=maxLoad
    }
    
    hash(key){
        let hash=0
        for (const char of key){
            hash+=char.charCodeAt(0)
        }
        return hash
    }
    set(key ,value){
        let currentLoad=this.count/this.size
        if(currentLoad>=this.maxLoad){
            return this.resizeTable()
        }
        let index=this.hash(key)%this.size
        if(!this.table[index]){
            this.table[index]=[]
        }
        this.table[index].push({key,value})
        this.count++
    }
    resizeTable(){
        const newSize=2*this.size
        const newTable=new Array(newSize).fill(null)
        for(const bucket of this.table ){
            if(bucket){
                for(const paire of bucket){
                    const newIndex=this.hash(paire.key)%newSize
                    console.log(newIndex)
                    if(!newTable[newIndex]){
                        newTable[newIndex]=[]
                    }
                    newTable[newIndex].push(paire)
                }
            }
        }
        this.table=newTable
        this.size=newSize
    }
}

const hash =new HashTable()
hash.set("name","prabhath")
hash.set("age",25)
hash.set("color","white")
hash.set("place","cherthala")
hash.set("mob",807636)


console.log(JSON.stringify(hash))
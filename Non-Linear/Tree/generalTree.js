class GeneralTree{
    constructor(){
        this.root=null
    }
    insert(value,parentValue){
        const newNode={value,children:[]}
        if(!this.root){
            this.root=newNode
        }else{
            this.insertChild(this.root,newNode,parentValue)
        }
    }
    insertChild(node,newNode,parentValue){
          let currentNode=node
          if(currentNode.value==parentValue){
            currentNode.children.push(newNode)
            return
          }
          for (let i = 0; i < currentNode.children.length; i++) {
            this.insertChild(currentNode.children[i],newNode,parentValue)    
          }
    }
}

const tree=new GeneralTree()
tree.insert(10,null)
tree.insert(12,10)
tree.insert(25,12)

console.log(JSON.stringify(tree))
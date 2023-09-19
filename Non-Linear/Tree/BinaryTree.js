class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(value){
        if(!this.root){
            this.root=new Node(value)
            return
        }
        this.insertRecursive(this.root,value)
    }
    insertRecursive(node,value){
        if(value<node.value){
           if(node.left==null){
            node.left=new Node(value)
           }else{
            this.insertRecursive(node.left,value)
           }
        }else{
            if(node.right==null){
                node.right=new Node(value)
               }else{
                this.insertRecursive(node.right,value)
               }
        }
    }

    search(value){
        if(!this.root){
            return false
        }
      return  this.searchRecursivelly(this.root,value)
    }
    searchRecursivelly(node,value){
        if(!node){
            return false
        }
        if(node.value===value){
            return true
        }
        else if(value<node.value){
          return  this.searchRecursivelly(node.left,value)

        }else{
          return  this.searchRecursivelly(node.right,value)

        }
    }

   minimum(node){
    if(!node.left)
    {
        return node.value
    }
    return this.minimum(node.left)
   }

   preorder(node){
    let result=[]
    if(node){
        result.push(node.value)
        result=result.concat(this.preorder(node.left))
        result=result.concat(this.preorder(node.right))

    }
    return result
   }
   inorder(node){
    let result=[]
    if(node){
        result=result.concat(this.inorder(node.left))
        result.push(node.value)
        result=result.concat(this.inorder(node.right))

    }
    return result
   }
postorder(node){
    let result=[]
    if(node){
        result=result.concat(this.postorder(node.left))
        result=result.concat(this.postorder(node.right))
        result.push(node.value)

    }
    return result
   }
levelorder(node){
    let queue=[node]
    let result=[]
    while(queue.length>0){
        let currentNode=queue.shift()
        result.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return result
}
isValidBst(){
  return this.checkNode(this.root,-Infinity,Infinity)
}
checkNode(node,min,max){
    if(!node){
        return true
    }
    if(node.value<min ||node.value>max){
        return false
    }

    return (
        this.checkNode(node.left,min,node.value) &&
        this.checkNode(node.right,node.value,max)
    )
}
}

const myTree =new BinaryTree()
// myTree.insert(10)
myTree.insert(15)
myTree.insert(9)
myTree.insert(5)
myTree.insert(14)
myTree.insert(7)
// console.log(JSON.stringify(myTree))
console.log(myTree.preorder(myTree.root))
console.log(myTree.inorder(myTree.root))
console.log(myTree.postorder(myTree.root))
console.log(myTree.isValidBst())
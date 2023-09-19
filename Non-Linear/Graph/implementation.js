class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(node) {
    if (!this.adjList.has(node)) {
      this.adjList.set(node, []);
    }
  }

  addEdge(node1, node2) {
    if (this.adjList.has(node1) && this.adjList.has(node2)) {
      this.adjList.get(node1).push(node2);
      this.adjList.get(node2).push(node1);
    }
  }

  bfs(startNode) {
    let queue = [startNode];
    const visited = new Set();
    visited.add(startNode);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);

      for (const neighbor of this.adjList.get(currentNode)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }

  dfs(startNode) {
    let stack = [startNode];
    const visited = new Set();

    while (stack.length > 0) {
      let currentNode = stack.pop();
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        console.log(currentNode)
        for (const neighbor of this.adjList.get(currentNode)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

console.log('BFS starting from node A:');
graph.dfs('A');

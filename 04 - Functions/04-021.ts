type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>( // 1
  node: T, // 2
  f: (value: string) => string
) : T { // 3
  return {
    ...node,
    value: f(node.value)
  }
}

let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

let a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode

console.log(a1, b1, c1)

// 1. mapNode is a function that defines a single generic type parameter, T. T has an upper bound of TreeNode. That is, T, can be either a TreeNode, or a subtype of TreeNode.
// 2. mapNode takes two parameters, the first of which is a node of type T. Because in point 1 we said node extends TreeNode, if we passed in something that’s not a TreeNode – say, an empty object {}, null, or an array of TreeNodes – that would be an instant error. node has to be either a TreeNode or a subtype of TreeNode.
// 3. mapNode returns a value of type T. Remember that T might be a TreeNode, or any subtype of TreeNode.
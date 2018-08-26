let t1 = {
    val: 2,
    right:
        {
            val: 3,
            right: {val: 7, right: null, left: null},
            left: null
        },
    left:
        {
            val: 1,
            right: {val: 4, right: null, left: null},
            left: null
        }
};

let t2 = {
    val: 1,
    // right: {val: 2, right: null, left: null},
    // left:
    //     {
    //         val: 3,
    //         right: null,
    //         left: {val: 5, right: null, left: null}
    //     }
};

function BFS_iterative(t1) {
    if (!t1) return;
    let stack = [t1];
    let traversedArr = [];
    while(stack.length>0){
        let head = stack.shift();
        traversedArr.push(head && head.val || null);
        if(head) stack.push(head.left);
        if(head) stack.push(head.right);
    }
    console.log(traversedArr);
    return traversedArr;
}

BFS_iterative(t1);
BFS_iterative(t2);


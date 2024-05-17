/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  example onhow to set node
        // node = new ListNode(1);
        // node.next = null;
        var addTwoNumbers = function(l1, l2, carry=0) {
            console.log(l1, l2)
            if(l1===null){
                l1 = new ListNode(0)
                l1.next=null
            }else if (l2===null){
                l2 = new ListNode(0)
                l2.next=null
            }
            var sum = l1.val + l2.val + carry
            if(sum>=10){
                var node = new ListNode(sum-10)
                if(l1.next || l2.next){
                    var nodeCarry = addTwoNumbers(l1.next, l2.next, 1)
                    node.next = nodeCarry
                }else{
                    var nodeCarry = new ListNode(1)
                    node.next = nodeCarry
                }
            }
            else{
                var node = new ListNode(sum)
                if(l1.next || l2.next){
                    var nodeCarry = addTwoNumbers(l1.next, l2.next, 0)
                    node.next = nodeCarry
                }else{
                    node.next = null
                }
                
            }
            
            console.log(node)
            return node
        };
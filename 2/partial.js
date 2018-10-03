/**
NOTE: Partial solution. Due to JS issue about large Integers converting to exponential, needs a revisit.
*/

/**
 *  * Definition for singly-linked list.
 *   * function ListNode(val) {
 *    *     this.val = val;
 *     *     this.next = null;
 *      * }
 *       */
var sumLinkedList = ((ll) => {
	let thisNode = ll;
  let sumList = [];
  if (thisNode.next === null) {
    sumList.push(thisNode.val);
  }
  while (thisNode.next !== null) {
    sumList.push(thisNode.val);
    if (thisNode.next.next === null) {
      sumList.push(thisNode.next.val);
    }
  	thisNode = thisNode.next;
  }
  const sumNum = Number(sumList.reverse().join(''));
  return sumNum;
});
var translateNumberToRevLinkedList = ((result) => {
  let numArr = result.toString().split('').reverse().map((digit) => { return Number(digit); });
  var prevNode;
  var firstNode;
  numArr.forEach((digit) => {
    var digitNode = new ListNode(digit);
    if (prevNode) {
      prevNode.next = digitNode;
    }
    else {
      firstNode = digitNode;
    }
    prevNode = digitNode;
	});
  return firstNode;
});
/**
 *  * @param {ListNode} l1
 *   * @param {ListNode} l2
 *    * @return {ListNode}
 *     */
var addTwoNumbers = function(l1, l2) {
  const result = sumLinkedList(l1) + sumLinkedList(l2);
  return translateNumberToRevLinkedList(result);
};

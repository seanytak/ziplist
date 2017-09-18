const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function zipList(list1, list2) {
  const zipped = [];
  for (let i = 0; i < list1.length; i++) {
    zipped.push(list1[i]);
    zipped.push(list2[i]);
  }
  return zipped;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));

type UnionType = string | number;
 
function showType(arg: UnionType) {
  console.log(arg);
}
 
showType("test");
// Output: test
 
showType(7);
// Output: 7		
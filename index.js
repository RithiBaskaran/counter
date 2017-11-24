var counter = function(arr)
{
  return 'There are ' + arr.length + ' elements in this array';
}

var newcounter = function(arr)
{
  return 'There are ' + arr.length + ' new elements in this array';
}

//module.exports = counter;
/*module.exports = {
  countermethod : counter,
  newcountermethod : newcounter
}*/

module.exports = {
  counter,
  newcounter
}

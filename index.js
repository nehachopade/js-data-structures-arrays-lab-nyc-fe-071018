// Write your solution here!
const drivers=["Milo","Otis","Garfield"];
function destructivelyAppendDriver(someName){
  /*const newDrivers=drivers.slice()*/
      drivers.push(someName);
}

function destructivelyPrependDriver(someName)
{
      drivers.unshift(someName);
}
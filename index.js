// Write your solution here!
const drivers=["Milo","Otis","Garfield"];
function destructivelyAppendDriver(someName){

      drivers.push(someName);
}

function destructivelyPrependDriver(someName)
{
      drivers.unshift(someName);
}

function destructivelyRemoveLastDriver(someName)
{
      drivers.pop(someName);
}

function destructivelyRemoveFirstDriver(someName)
{
      drivers.shift(someName);
}
function appendDriver(someName)
{
    return [...drivers,someName];
}

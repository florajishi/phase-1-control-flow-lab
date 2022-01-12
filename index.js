function scuberGreetingForFeet(rideDistance){
  let result
  if (rideDistance <= 400){
    result = "This one is on me!"
  }else if(rideDistance > 2000 && rideDistance <= 2500) {
    result = "I will gladly take your thirty bucks."
  }else if(rideDistance > 2500) {
    result = "No can do."
  }else{
    result = "Enjoy your ride!"
  }
  return result
}

function ternaryCheckCity(city){
  return city === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}

//scuberGreetingForFeet(199)
// => This on is on me!
//scuberGreetingForFeet(500)
// => Enjoy your ride!
//scuberGreetingForFeet(2001)
// => I will gladly take your thirty bucks.
//scuberGreetingForFeet(2501)
// => No can do

//ternaryCheckCity('NYC')
// => Ok, sounds good.
//ternaryCheckCity('Other')
// => No go.

//switchOnCharmFromTip('generous')
// => Thank you so much.
//switchOnCharmFromTip('not as generous')
// => Thank you.
//switchOnCharmFromTip()
// => Bye.
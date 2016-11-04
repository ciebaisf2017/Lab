function clock(hours, minutes) {
  if(hours > 12 || hours < 0 || minutes > 59 || minutes < 0){
    console.log('out of range')
  }
  var degree1 = Math.abs(5.5*minutes - 30*hours)
  var degree2 = 360 - degree1
  console.log(degree1)
  console.log(degree2)
}


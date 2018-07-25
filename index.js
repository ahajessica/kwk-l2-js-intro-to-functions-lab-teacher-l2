// Write your code in this file!

function getUKTime() {
let time =  new Date().getHours() + 5
  return time
}
 
getUKTime()

function discountTicket(x) {
  let discount = x * 0.2
  let price = x - discount
  return price
}

function tweetReply(x) {
  let fanName = x
  return "Hey " + fanName + ", thanks so much for the support! I really appreciate it!"
}
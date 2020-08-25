// passing the default parameters to a function

let profileInfo = function(user, followers, likes=0){
  return `${user} has ${followers} followers and ${likes} likes`
}

console.log(profileInfo('John', 150));
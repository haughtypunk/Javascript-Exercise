// if(false){
//     console.log('i am inside IF Block')
//     console.log('I am still inside the Block')
// } else if(true){
//     console.log('I am inside ELSE IF Block')
// }   else {
//     console.log('I am inside ELSE Block')
// }

var whoIsHere = 'IronMan'

if(whoIsHere === 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
} else if (whoIsHere === 'teacher'){
    console.log('Greeting message for Teacher')
    console.log('Allow access to his courses.')
} else{
    console.log('MESSAGE: Please verify your email')
    console.log('Please send a message to user for verification.')
}

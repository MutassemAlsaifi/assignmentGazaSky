//This function will receive the email and returns if validation 
function emailCheck(email: string):boolean {
//by using the RegExp pattern to check the email
let validEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//test it if valid or not
    return validEmail.test(email);  
}

let emails = [
'ahmed.com' , 'ahmed@gmail.com' , 'ali@gmail.com', 'face@gamil.org'
]

for (let i = 0; i < emails.length; i++) {
console.log(emails[i] + ' ' +
   ( emailCheck (emails[i])? 'This is a valid email' : 'This is not a valid email')
)
}
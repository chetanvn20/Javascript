//question 1
function array1()
{
    let a = parseInt(prompt("Enter number"))
    var arr = []
    for(let i = 1 ; i <= a ; i++)
    {
        arr.push(i)
    }
    console.log(arr)

    let odd = arr.filter(el=>el%2!=0)
    console.log(odd)

    let cube1 = odd.map(function(el){
        return el**3
    })
    console.log(cube1)
}



// question 2
class user{
    constructor(name,age,email,coins)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course =  [];
    }

    login(){
        console.log('${this.name}has logged in');
        return this;
    }

    logout(){
        console.log('${this.name}has logged out');
        return this;
    }
    getDetails(){
        console.log(`user is ${this.name}, email is ${this.email},and has${this.coins}`);
        return this;
    }

}

class moderator extends user {
    // constructor(name,age,email)
     
        adcoins()
        {
            this.coins++;
            console.log(`${this.name} has ${this.coins} coins`);
            return this;
        }
         removeCoins()
         {
            this.coins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
         }


     
}

class adminn extends moderator{
    addcourse(user,course){
        user.course.push(course);
        console.log(user);
    }
    delcourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }


}


let user1 = new user('rushi',21,'rushi@gmail.com')
let user2 = new user('chetan',24,'che@gmai.com')
let mod = new moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new adminn('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(el => {
    console.log(el);
});
admin.addcourse(user1,'Javascript');

user1.login().adcoins().getDetails().logout();
// Question 3

console.log("Promises");

let users = [
    {
        name:'Berlin',
        email:'b@gmail.com',
    },
    {
        name:'Rio',
        email:'r@gmail.com',
    },
    {
        name:'Tokyo',
        email:'t@gmail.com',
    },
]

function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}

function createUser(user, callback){
    setTimeout(()=>{
        users.push(user);
        callback();
    },3000);
}

// getUsers();

createUser({name:'Denver',email:'d@gmail.com'}, getUsers);


// Promises

function createUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            users.push(user);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Oops an error occured");
            }

        }, 3000);
    })
}

createUser({name:'Denver',email:'d@gmail.com'})
.then(getUsers)
.catch(error=>console.log(error));


Example two

const userData = new Promise((resolve,reject)=>{
    const error = false;

    if(error){
        reject("an error occured");
    }
    else{
        resolve({
            firstname:"Sachin",
            age:24,
            class:'12th',
        })
    }


});

userData
    .then(data=>console.log(data))
    .catch(error=>console.log(error))


// Async Await

const photos = [];
async function photoUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();
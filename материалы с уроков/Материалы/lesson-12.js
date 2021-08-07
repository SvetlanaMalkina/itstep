//Наследование ES6
class User {
    test='test'
    constructor(name,age,gender,position) {
        this.name=name
        this.age=age
        this.gender=gender
        this.position=position
    }
    info() {
        console.log(`Name: ${this.name}, age: ${this.age} `)
    }
}
let user=new User(
    'Viktor',
    25,
    'male',
    'courier'
)
class Admin extends User{
    constructor(name,age,gender,position,location,accessToWrite) {
        super(name,age,gender,position);
        this.location=location
        this.accessToWrite=accessToWrite
    }
    info() {
        super.info();
        console.log(`Location: ${this.location}`)
    }
}
let admin=new Admin(
    'Elena',
    32,
    'female',
    'owner',
    'Mogilev',
    true
)
user.info()
console.log(user)
admin.info()
console.log(admin)
// ES5
function UserOld (name,age,gender,position) {
        this.name=name
        this.age=age
        this.gender=gender
        this.position=position
}
UserOld.prototype.info=function () {
    console.log(`Name: ${this.name}, age: ${this.age} `)
}
let userOld=new UserOld(
    'Viktor',
    25,
    'male',
    'courier'
)
function AdminOld (name,age,gender,position,location,accessToWrite) {
        UserOld.call(this,name,age,gender,position);
        this.location=location
        this.accessToWrite=accessToWrite
}
AdminOld.prototype=Object.create(UserOld.prototype)
AdminOld.prototype.constructor=AdminOld

let adminOld=new AdminOld(
    'Elena',
    32,
    'female',
    'owner',
    'Mogilev',
    true
)









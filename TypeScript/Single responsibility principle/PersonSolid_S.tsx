//We can improve the class above by removing the responsibility of email validation from 
//the Person class and creating a new Email class that will have that responsibility

//Making sure that a class has a single responsibility makes it per default also easier 
//to see what it does and how you can extend/improve it.

class Email_S{
    public email : string;
    constructor(name : string, surname : string, email : string){
       if(this.validateEmail(email)){
            this.email = email;
        }
        else {
            throw new Error("Invalid email");
        }
    }
    validateEmail(email : string){
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }
}


class Person_S{
    public name : string;
    public surname : string;
    public email : Email_S;
    constructor(name : string, surname : string, email : Email_S){
        this.surname = surname;
        this.name = name;
        this.email = email;
    }
    greet(){
        alert("Hi!");
    }
}
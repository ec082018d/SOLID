
/*
Single responsibility principle: A class should have only a single responsibility
    
 God class is a class that knows too much or does too much. 
 The God object is an example of an anti-pattern.

God classes keep track of a lot of information and have several responsibilities. 
One code change will most likely affect other parts of the class and therefore 
indirectly all other classes that use it.   That, in turn, leads to an even bigger 
maintenance mess since no one dares to do any changes other than adding new 
functionality to it. 

*/

//this class should not include email validation because that is not related to a person behavior

class PersonNot_S {
    public name : string;
    public surname : string;
    public email : string;
    constructor(name : string, surname : string, email : string){
        this.surname = surname;
        this.name = name;
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
    greet(){
        alert("Hi!");
    }
}
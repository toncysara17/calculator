class Bank{
    accountcreate(){

    }
    
    static getAccountDetails(){
        let users={
            1000:{acno:1000,username:"userone",password:"userone",actype:"savings",balance:5000},
            1001:{acno:1001,username:"usertwo",password:"usertwo",actype:"savings",balance:6000},
            1002:{acno:1002,username:"userthree",password:"userthree",actype:"savings",balance:7000},

        }
        return users
    }
   static  login(){
        let account_number=acno.value;
        let user_name=uname.value;
        let password=pswd.value;
        let userdata=Bank.getAccountDetails()
        if(account_number in userdata){
            if(user_name==userdata[account_number].username&password==userdata[account_number].password){
                alert("login success");
                window.location.href="transaction.html"
                
            }
            else{
                alert("invalid credentials")
            }
        }

    }
    withdrawl(){

    }
    deposit(){

    }
}
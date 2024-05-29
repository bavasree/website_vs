
const email=document.getElementById('email');
const Password=document.getElementById('password');
const form=document.getElementById('form');

const email_error=document.getElementById('email_error');
const pass_error=document.getElementById('pass_error');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log('check', email)
var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //regular expressions
    if(!email.value.match(email_check))
      {
       e.preventDefault();
       email_error.innerHTML= "Valid Email is Required";
      }
      else
      {
        email_error.innerHTML="";
      }
var pass_check=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]$/;
      if(!Password.value.match(pass_check))
        {
            e.preventDefault();
            pass_error.innerHTML= "Password must have atleast one uppercase,lowercase,numeric value and one special character";
        }
      if(Password.value.length <8)
        {
           e.preventDefault();
           pass_error.innerHTMl="password cannot be less than 8 characters."; 
        }
        else
        {
            pass_error.innerHTML="";
        }
        if(Password.value.length >=20)
            {
                e.preventDefault();
                pass_error.innerHTML="Password must be less than 20 characters.";
            }
            if(Password.value =='password')
                {
                    e.preventDefault();
                    pass_error.innerHTML="Password can't be password";
                }if(Password.value=="")
                    {
                        e.preventDefault();
                        pass_error.innerHTML="Please enter the password";
                    }
})
       



































































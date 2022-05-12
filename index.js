let passverify=false, emailverify=false , ageverify=false, contactverify=false, fnameverify=false, lnameverify=false;  
document.getElementById('button').disabled = true;

function Fname(){
    let fname=document.getElementById('fname').value;
    if(fname){
        fnameverify=true;      
    }
    else{
        document.getElementById('button').disabled = true;
        fname=false;
    }
    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
    
}
function Lname(){
    let lname=document.getElementById('lname').value;
    if(lname){
        lnameverify=true;      
    }
    else{
        document.getElementById('button').disabled = true;
        lname=false;
    }
    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
}


function firstpass(){
    let pass=document.getElementById('password').value;
    let regexp=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let confirmpass=document.getElementById('confirm-password').value;
  
    if(!regexp.test(pass)) {
        document.getElementById('password-length').innerHTML="password should contain atleast two numbers and one special character";
        passverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('password-length').innerHTML="";
    }

    if(pass.length<8 || pass.length>20){
        document.getElementById('password-regex').innerHTML="Password Must be 8-20 characters long";
        passverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('password-regex').innerHTML="";
    }
   
    if(pass===confirmpass ){
        document.getElementById('password-mismatch').innerHTML="";
        passverify=true;
    }
    else{
        document.getElementById('password-mismatch').innerHTML="Password Don't Match";
        passverify=false;
        document.getElementById('button').disabled = true;
        }

    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
}
function passwordValidation(){

    let pass=document.getElementById('password').value;
    let confirmpass=document.getElementById('confirm-password').value;

    if(pass===confirmpass){
        document.getElementById('password-mismatch').innerHTML="";
        passverify=true;
    }
    else  if(pass.length<8 || pass.length>20){
        document.getElementById('password-mismatch').innerHTML="Password Must be 8-20 characters long";
        passverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('password-mismatch').innerHTML="Password Don't Match";
        passverify=false;
        document.getElementById('button').disabled = true;
        }


    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
        }    
}

function emailValidation()
{
    let val=document.getElementById("email").value;
    let emailarr=val.split(","), check=true;
    for(let i=0;i<emailarr.length;i++){
        let a=emailarr[i].indexOf('@');
        let b=emailarr[i].indexOf(".com")
        if(a===-1 || b===-1){
                check=false;
        }
    }
   
    if(check===false){
        document.getElementById('invalidemail').innerHTML="Invalid Email.Please Enter the Valid Email";
        emailverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('invalidemail').innerHTML="";
        emailverify=true;
    }

    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
}

function ageValidation()
{
    let val=document.getElementById("age").value;
    if(val<18){
        document.getElementById('invalidage').innerHTML="Kids not allowed!";
        ageverify=false;
        document.getElementById('button').disabled = true;
    }
    else if(val>151)
    {
        document.getElementById('invalidage').innerHTML="Ghost Found! HEY BUDDY";
        ageverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('invalidage').innerHTML="";
        ageverify=true;
    }
    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
}
function contactValidation()
{
    let val=document.getElementById("contact").value;

    if(val.length!==11){
        document.getElementById('invalidcontact').innerHTML="Invalid Number!";
        contactverify=false;
        document.getElementById('button').disabled = true;
    }
    else{
        document.getElementById('invalidcontact').innerHTML="";
        contactverify=true;
    }
    if( passverify && emailverify &&  ageverify && contactverify && fnameverify && lnameverify){
        document.getElementById("button").disabled=false;
    }
}

function formValidation(){
}



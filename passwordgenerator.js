function generatepassword(length,includelowercase,includeuppercase,includenumber,includesymbols){
    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars="0123456789";
    const symbolchars="!@#$%^&&*()_+-=";
    let allowedchars="";
    let password=""; 


    allowedchars+=includelowercase?lowercasechars:"";
    allowedchars+=includeuppercase?uppercasechars:"";
    allowedchars+=includenumber?numberchars:"";
    allowedchars+=includesymbols?symbolchars:"";
    if(length<=0){
        return `(password length must be atleast 1)`;
    }
    if(allowedchars.length===0){
        return `(at least 1 set of charas must be selected)`;
    }
    for(let i=0; i<length; i++){
        const randomindex=Math.floor( Math.random()*allowedchars.length);
        password+=allowedchars[randomindex];   
    }
     return password  ;
}
 const passwordlength=12 ;
const includelowercase=true;
const includeuppercase=true;
const includenumber=true;
const includesymbols=true;
const password=generatepassword(passwordlength,
    includelowercase,
    includeuppercase,
    includenumber,
    includesymbols);
console.log(`generated password: ${password} `);

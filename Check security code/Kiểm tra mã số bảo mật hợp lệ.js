function code(str) {

    var str = prompt("enter the security code");

    regexp = /^[A-Z][0-9][H,L][Y,L]$/;

    if(regexp.test(str)){

        alert("correct security code")

    } else {

        alert("secutiry code wrong");
    }
    
}
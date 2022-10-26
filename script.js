let a =321;
    var rem;
    var r = 0
    while(a>0){
        rem = a%10;
        r = r + rem;
        a = (a-rem)/10;
    }
    console.log(r);
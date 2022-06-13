window.onload = function() {

    let x = 25;
    let y = -100;

    console.log(arskaiciusyrateigiamas(x));
    console.log(arskaiciusyrateigiamas(y));

}

function arskaiciusyrateigiamas(skaicius) {
    if (skaicius > 0){
        return true;
    }
    else{
        return false;
    }


}
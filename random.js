const lol = (a) => {
    a.b.text += "YIPEE!";
    return a;
}


const main = () => {
    let object = {
        "b": {
            "text": "this is me "
        }
    };
    object = lol(object);
    console.log(object);
}

main();
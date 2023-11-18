const values = {a:1, b:2}


function owner (obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

owner(values);
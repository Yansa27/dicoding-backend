// costum eror 

let json = '{ "age" : 30 }';

try {
    let user = JSON.parse(json)

    if (!user.name) {
        throw new SyntaxError("'name' is required");
    }

    console.log(user.name);
    console.log(uder.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    }else if (error instanceof ReferenceError) {
        console.log(error.message);
    }else {
        console.log(error.stack);
    }
}


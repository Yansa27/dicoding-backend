// object composition

class Developer {
    constructor (name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is commit changes...`)
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} iss building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deployApp...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);

    return Object.assign(developer, canBuildAPI(developer));
}

function cretaeDevOps(name) {
    const developer = new Developer(name);

    return Object.assign(developer , canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);

    return Object,assign(developer, canBuildUI(developer) , canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('yansajr');

frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer ? ` , frontEndDeveloper instanceof Developer);


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
            conso
        }
    }
}


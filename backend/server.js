const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const readline = require('readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
});

const { Schema } = mongoose;

// TODO: Jossain vaiheessa pitää siirtää nämä omiin tiedostoihin, kun tulee hotellit ja muut
const personSchema = new Schema({
    name: String,
    password: String
});

const Person = mongoose.model('Person', personSchema);

// Tee oma .env tiedosto jossa on DBUSER ja DBKEY
const uri = "mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBKEY + "@cluster0.alvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

async function getUser(username) {
    return await Person.findOne({name: username});
};

async function addUser() {
    var username = '';
    var password = '';

    while (true) {
        username = await readline.question('Give new username: ');
        if (await getUser(username) !== null || username === '') {
            console.log('User with the same name already exists or username is null, try again...');
            continue;
        } else {
            break;
        }
    }

    while (true) {
        password = await readline.question('Give new password for ' + username + ': ');
        if (password === '') {
            console.log('Password can not be null, try again...');
            continue;
        } else {
            break;
        }
    }

    const hashedPass = await bcrypt.hash(password, 10);

    await Person.create({name: username, password: hashedPass});
}

async function signInUser() {
    while (true) {
        const username = await readline.question('Give username: ');
        const user = await getUser(username);

        if (user === null) {
            console.log('User does not exist, try again...');
            continue;
        } else {
            while (true) {
                const password = await readline.question('Give password: ');
                if (bcrypt.compareSync(password, user.password) === true) {
                    console.log('Correct password!');
                    break;
                } else {
                    console.log('Incorrect password...');
                    continue;
                }
            }
            break;
        }
    }
}

async function getAllUsers() {
    return await Person.find({});
}

async function deleteAllUsers() {
    await Person.deleteMany({});
}

async function run() {
    await connectDB();

    while (true) {
        const choice = await readline.question('Add user (0), sign in (1), delete all (2), list all (3), exit (4): ');
        if (choice === '0') {
            addUser();
            continue;
        } else if (choice === '1') {
            signInUser();
            continue;
        } else if (choice === '2') {
            deleteAllUsers();
            continue;
        } else if (choice === '3') {
            const allUsers = await getAllUsers();
            console.log(allUsers);
            continue;
        } else if (choice === '4') {
            console.log('Exiting...');
            break;
        } else {
            console.log('Try again...');
            continue;
        }
    }

    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
}

run().catch(console.dir);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const readline = require('readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
});

const Users = require('./models/userModel');
const Bookings = require('./models/bookingsModel');
const Hotels = require('./models/hotelModel');

// Tee oma .env tiedosto jossa on DBUSER ja DBKEY
const uri = "mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBKEY + "@cluster0.alvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

async function getUser(username) {
    return await Users.findOne({username: username});
};

async function addUser() {
    var username = '';
    var email = '';
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
        email = await readline.question('Give new email: ');
        if (email === '') {
            console.log('Email can\'t be null, try again...');
            continue;
        } else {
            break;
        }
    }

    while (true) {
        password = await readline.question('Give new password for ' + username + ': ');
        if (password === '') {
            console.log('Password can\'t be null, try again...');
            continue;
        } else {
            break;
        }
    }

    await Users.create({username: username, email: email, password: password});
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
    return await Users.find({});
}

async function deleteAllUsers() {
    await Users.deleteMany({});
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
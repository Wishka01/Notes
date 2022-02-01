require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://wishka01:${process.env.password}@cluster0.1etfa.mongodb.net/notesdb?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.error(err);
});

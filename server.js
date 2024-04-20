const { initializeApp } = require('firebase/app')
const { getDatabase, ref, push, onValue, set } = require('firebase/database')

const express = require('express')
const path = require('path')
const app = express()
const port = 5600

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './web_pages')))
app.use(express.static(path.join(__dirname, './data')))

const appSettings = {
    databaseURL: "https://personal-site-e2936-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const initialiseApp = initializeApp(appSettings)
const database = getDatabase(initialiseApp)
const usersDB = ref(database, "users")

onValue(usersDB, (snapshot) => {
    console.log("**********************************************************")
    console.log(snapshot.val())
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/index.html'))
})

app.post('/index', (req, res) => {
    const data = req.body
    const db = getDatabase();
    set(ref(db, 'users/' + 'swapnil'), data)
})

app.listen(port, () => {
    console.log(`listening on port http:/localhost:${port}`)
})
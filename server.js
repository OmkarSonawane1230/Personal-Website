const { initializeApp } = require('firebase/app')
const { getDatabase, ref, push } = require('firebase/database')

// const { getDatabase, ref, push } = require('firebase/database')

const express = require('express')
const path = require('path')
const app = express()
const port = 5500

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


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/index.html'))
})

app.post('/index', (req, res) => {
    // fs.appendFileSync('./data/accounts.txt', `${JSON.stringify(req.body)}\n`)
    const data = req.body
    console.log(Object.entries(data))

    push(usersDB, "Hello")
    
})

app.listen(port, () => {
    console.log(`listening on port http:/localhost:${port}`)
})
const initialiseApp = require('https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js')
const { getDatabase, ref, push } = require('https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js')

const express = require('express')
const path = require('path')
const app = express()
const port = 5500

const appSettings = {
    databaseURL: "https://personal-site-e2936-default-rtdb.asia-southeast1.firebasedatabase.app"
}

const initialApp = initialiseApp(appSettings)
const database = getDatabase(app)
const usersDB = ref(database, "users")

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './web_pages')))
app.use(express.static(path.join(__dirname, './data')))

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/index.html'))
})

app.post('/index', (req, res) => {
    // fs.appendFileSync('./data/accounts.txt', `${JSON.stringify(req.body)}\n`)
    const data = req.body
    console.log(Object.entries(data))

    // push(usersDB, data)
    
})

app.listen(port, () => {
    console.log(`listening on port http:/localhost:${port}`)
})
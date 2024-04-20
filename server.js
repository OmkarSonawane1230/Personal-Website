const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const port = 5500

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, './web_pages')))
app.use(express.static(path.join(__dirname, './data')))

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/./index.html'))
})

// for sending files
app.get('/uploads', (req, res) => {
    var tempFile = "/data/uploads/computer_media/example.pdf";
    fs.readFile(tempFile, function (err, data) {
        res.contentType("application/pdf");
        res.send(data);
    });
    // res.send("Hello world")
});

// START all the href pages end points
// Navigation
// Departments
app.get('/adminstaff', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./adminstaff.html'))
})

app.get('/automobile', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./automobile.html'))
})

app.get('/civil', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./civil.html'))
})

app.get('/computer', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./computer.html'))
})

app.get('/electronics&telecommunication', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./electronics&telecommunication.html'))
})

app.get('/generalscience', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./generalscience.html'))
})

app.get('/mechanical', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./mechanical.html'))
})

app.get('/visitingfaculty', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/departments/./visitingfaculty.html'))
})

// Disclosure
app.get('/committees', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/disclosure/./committees.html'))
})

app.get('/feefixationproposalssubmittedtoshikshanshulksamiti', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/disclosure/./feefixationproposalssubmittedtoshikshanshulksamiti.html'))
})

app.get('/feestructure', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/disclosure/./feestructure.html'))
})

app.get('/mandatorydisclosure', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/disclosure/./mandatorydisclosure.html'))
})

// Facilites
app.get('/canteen', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./canteen.html'))
})

app.get('/cctvcampus', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./cctvcampus.html'))
})

app.get('/computercenter', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./computercenter.html'))
})

app.get('/healthcenter', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./healthcenter.html'))
})

app.get('/hostel', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./hostel.html'))
})

app.get('/institutepremises', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./institutepremises.html'))
})

app.get('/library', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./library.html'))
})

app.get('/parking', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./parking.html'))
})

app.get('/photocopyandstationary', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./photocopyandstationary.html'))
})

app.get('/playarea', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./playarea.html'))
})

app.get('/wifi', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./wifi.html'))
})

app.get('/workshop', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/facilities/./workshop.html'))
})

// Student Section

app.get('/aicteonlineskilltest', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./aicteonlineskilltest.html'))
})

app.get('/alumni', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./alumni.html'))
})

app.get('/download', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./download.html'))
})

app.get('/educationloan', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./educationloan.html'))
})

app.get('/freeonlinecourseonswayam', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./freeonlinecourseonswayam.html'))
})

app.get('/itspokentutorial', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./itspokentutorial.html'))
})

app.get('/links', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./links.html'))
})

app.get('/msbteonlinemanual', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./msbteonlinemanual.html'))
})

app.get('/msbtesyllabus', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./msbtesyllabus.html'))
})

app.get('/sport', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./sport.html'))
})

app.get('/vppinmedia', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/studentsection/./vppinmedia.html'))
})

// Photogallery
app.get('/photogallery', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/./photogallery.html'))
})

// Contact us
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/contactus/./contactus.html'))
})

app.get('/feedbackform', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/contactus/./feedbackform.html'))
})

// Updates
app.get('/highlights', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/updates/./highlights.html'))
})

app.get('/importantlinks', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/updates/./importantlinks.html'))
})

app.get('/msbteperspectiveplan20192024', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/updates/./msbteperspectiveplan20192024.html'))
})

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/navigation/updates/./news.html'))
})

// Footer 
// About VPP
app.get('/aboutvidyapratishthan', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/aboutvpp/./aboutvidyapratishthan.html'))
})

app.get('/academiccoordinator', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/aboutvpp/./academiccoordinator.html'))
})

app.get('/governingbody', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/aboutvpp/./governingbody.html'))
})

app.get('/principaldesk', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/aboutvpp/./principaldesk.html'))
})

app.get('/vision&mission', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/aboutvpp/./vision&mission.html'))
})

// Admissions
app.get('/admissionenquirycell', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/admissions/./admissionenquirycell.html'))
})

app.get('/examcell', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/admissions/./examcell.html'))
})

app.get('/onlinepayment', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/admissions/./onlinepayment.html'))
})

app.get('/prospectus', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/admissions/./prospectus.html'))
})

// Placements
app.get('/alumniregistration', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/placements/./alumniregistration.html'))
})

app.get('/ourrecruiters', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/placements/./ourrecruiters.html'))
})

app.get('/placements', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/placements/./placements.html'))
})

app.get('/training', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/placements/./training.html'))
})

// Excess
app.get('/antiraggingcommittee', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./antiraggingcommittee.html'))
})

app.get('/auditedstatements', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./auditedstatements.html'))
})

app.get('/ciaannorms', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./ciaannorms.html'))
})

app.get('/extensionofapproval', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./extensionofapproval.html'))
})

app.get('/feesregulatingauthority', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./feesregulatingauthority.html'))
})

app.get('/grievancecommittee', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./grievancecommittee.html'))
})

app.get('/onlinegrievanceredressal', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./onlinegrievanceredressal.html'))
})

app.get('/womengrievancecommittee', (req, res) => {
    res.sendFile(path.join(__dirname, '/web_pages/pages/footer/excess/./womengrievancecommittee.html'))
})

// END all the href pages end points

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '/web_pages/./login.html'))
// })

// app.get('/createAccount', (req, res) => {
//     res.sendFile(path.join(__dirname, '/web_pages/./createAccount.html'))
// })

// app.get('/undetermineInfo', (req, res) => {
//     const jsonData = fs.readFileSync('./data/accountsInfo.txt').toString()
//     let jsonOrgData = ""
//     let jsonOrgDataArr = []
//     for (let i = 0; i < jsonData.length; i++) {
//         if (jsonData[i] === '\n') {
//             jsonOrgDataArr.push(JSON.parse(jsonOrgData))
//             jsonOrgData = ""
//         } else {
//             jsonOrgData = jsonOrgData + jsonData[i]
//         }
//     }

//     res.json(jsonOrgDataArr)
// })

// app.post('/createAccount', (req, res) => {
//     fs.appendFileSync('./data/accountsInfo.txt', `${JSON.stringify(req.body)}\n`)
// })

// in mac 5000 and 7000 port are busy go to --> System Preferences > Sharing > untick AirPlay Receiver
app.listen(port, () => {
    console.log(`listening on port http:/localhost:${port}`)
})
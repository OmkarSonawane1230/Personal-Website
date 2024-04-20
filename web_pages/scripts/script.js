submit.addEventListener('click', () => {
    let d = new Date()
    d = d.toString()
    const data = {
        firstName: `${namee.value}`,
        age: `${age.value}`,
        email: `${email.value}`,
        mobile: `${mobile.value}`,
        time: `${d.substring(0, 24)}`,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch('/index', options).catch((error) => {
        // to see this error open network tab
    })
})

// To get data from server

// const getData = async () => {
//     const response = await fetch('/undetermineInfo')
//     const data = await response.json()
//     for (let i = 0; i < data.length; i++) {
//         user.push(new inventoryManagement)
//         user[i].createUserAccount(data[i].firstName, data[i].lastName, data[i].emailAddress, data[i].password, data[i].time)
//     }
// }
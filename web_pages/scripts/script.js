async function postData(url = "", data = {}, method_ = "") {
    const response = await fetch(url, {
        method: method_,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

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
    
    postData("/send-user-details", data, "POST")
})

const likes = document.getElementsByClassName('like')

Array.from(likes).forEach(values => {
    values.addEventListener('click', (e) => {
        const data = {
            postTitle: `${e.target.getAttribute('id')}`
        }

        postData("/update-likes", data, "POST").then(response => {
            e.target.innerHTML = `Like ${response["count"]}`
        })
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
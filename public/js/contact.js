var contactData;
const contactBtn = document.getElementById('contactBtn')

const getDataField =(id) =>{
    return document.getElementById(id);
}
window.onload = () => {
    contactData = getData() 
}
const getData = () => {
    fetch('../js/contact.json').then((response) =>{
        return response.json()
    }).then((data) =>{
        contactData = data;
        return data

    })
}

contactBtn.addEventListener('click', () => {
    const firstName =getDataField('firstname').value
    const lastName =getDataField('lastname').value
    const emailid =getDataField('emailid').value
    const Mobile =getDataField('Mobile').value
    const msgBox =getDataField('msgBox').value


const data = {
        id : `${Date.now()}`,
        firstName : firstName,
        lastName : lastName,
        emailid : emailid,
        Mobile : Mobile,
        msg : msgBox

    }
    //contactData.push(data)
    console.log(data)

})

let state = { };

document.querySelector(".save").addEventListener("click", function(){
    // if (document.querySelector('input').value === '' && document.querySelector('input').hasAttribute(required)){
    //     alert('please fill in all fields');
    // }
    // else {
        state = {
            Name: document.querySelector('.name>input').value,
            Patronym: document.querySelector('.patronym>input').value,
            Surname: document.querySelector('.surname>input').value,
            Date: document.querySelector('.date>input').value,
            University: document.querySelector('.university>input').value,
            Faculty: document.querySelector('.faculty>input').value,
            Specialization: document.querySelector('.specialization>input').value,
            Graduated: document.querySelector('.graduated>input').value,
            Phone: document.querySelector('.phone>input').value,
            Email: document.querySelector('.mail>input').value,
            Skype: document.querySelector('.skype>input').value,
            Telegram: document.querySelector('.telegram>input').value,
        };
        document.querySelector(".name").innerHTML = "Name: " + state.Name;
        document.querySelector(".patronym").innerHTML = "Patronym: " + state.Patronym;
        document.querySelector(".surname").innerHTML = "Surname: " + state.Surname;
        document.querySelector(".date").innerHTML = "Date: " + state.Date;
        document.querySelector(".university").innerHTML = "University: " + state.University;
        document.querySelector(".faculty").innerHTML = "Faculty: " + state.Faculty;
        document.querySelector(".specialization").innerHTML = "Specialization: " + state.Specialization;
        document.querySelector(".graduated").innerHTML = "Graduated: " + state.Graduated;
        document.querySelector(".phone").innerHTML = "Phone: " + state.Phone;
        document.querySelector(".mail").innerHTML = "Mail: " + state.Email;
        document.querySelector(".skype").innerHTML = "Skype: " + state.Skype;
        document.querySelector(".telegram").innerHTML = "Telegram: " + state.Telegram;
        document.querySelector(".main").removeChild(document.querySelector(".save"))
    // }
});

document.querySelector(".print").addEventListener("click", function(){
    window.print();
});

document.querySelector(".attach").addEventListener("click", attachFile)
function attachFile() {
    document.getElementById('fileid').click();
}



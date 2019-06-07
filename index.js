
let state = {};

document.querySelector(".save").addEventListener("click", function(){
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
        Telegram: document.querySelector('.telegram>input').value
    };

        document.querySelector('.name').innerHTML = "Name: " + state.Name;
        document.querySelector(".patronym").innerHTML = "Patronym: " + state.Patronym;
        document.querySelector(".surname").innerHTML = "Surname: " + state.Surname;
        document.querySelector(".date").innerHTML = "Birthday: " + state.Date;
        document.querySelector(".university").innerHTML = "University: " + state.University;
        document.querySelector(".faculty").innerHTML = "Faculty: " + state.Faculty;
        document.querySelector(".specialization").innerHTML = "Specialization: " + state.Specialization;
        document.querySelector(".graduated").innerHTML = "Graduated: " + state.Graduated;
        document.querySelector(".phone").innerHTML = "Phone: " + state.Phone;
        document.querySelector(".mail").innerHTML = "Mail: " + state.Email;
        document.querySelector(".skype").innerHTML = "Skype: " + state.Skype;
        document.querySelector(".telegram").innerHTML = "Telegram: " + state.Telegram;
        document.querySelector(".buttons").removeChild(document.querySelector(".save"));


        const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
        const a = document.createElement("a");
        a.setAttribute("href", `data: ${data}`);
        a.setAttribute("download","data.json");
        a.setAttribute("class","button");
        a.innerHTML = 'Download page';
        document.querySelector(".buttons").appendChild(a);

});

document.querySelector(".print").addEventListener("click", function(){
    window.print();
});

    const uploadButton = document.getElementById("uploadbtn");
    uploadButton.addEventListener("change", function(){
        const preview =  document.getElementById("picField");
        const file    = document.querySelector('input[type=file]').files[0];
        const reader  = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }

});
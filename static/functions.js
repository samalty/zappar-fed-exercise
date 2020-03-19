let users = [
    { img: "static/img/badu.png", name: "Erica Badu", email: "e.badu@example.com", permission: "Owner",},
    { img: "static/img/p.png", name: "Pat Nelsson", email: "p.nelsson@example.com", permission: "Admin",},
    { img: "static/img/amy.png", name: "Amy Namy", email: "a.namy@example.com", permission: "Standard",},
    { img: "static/img/v.png", name: "Victor D.", email: "v.d@example.com", permission: "Standard",},
];

let newUsers = [
    { img: "static/img/olly.png", name: "Olly", email: "o.hunter@example.com", permission: "Standard",},
    { img: "static/img/q.png", name: "Pending acceptance", email: "j.dog@example.com", permission: "Standard"},
];

let headers = ["", "Team member", "Email", "Permission level"];

let myTable = document.querySelector("#table");

function handleTable(){
    // Refresh inner HTML for when function is called on by pushUser
    myTable.innerHTML = "";
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    users.forEach(user => {
        let row = document.createElement('tr');
        row.className = 'notHeader';

        Object.entries(user).forEach(([key,value]) => {
            let cell = document.createElement('td');

            if (key == 'img') {
                let image = document.createElement('img');
                image.src = value;
                cell.appendChild(image);
            } else {
                let textNode = document.createTextNode(value);
                cell.appendChild(textNode);
            }

            row.appendChild(cell);
        });
        
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.className = 'btn';
        btn.id = 'bin';
        btn.style.background = "url('static/img/bin.png')";

        // Remove users from table
        btn.onclick = event => {
            table.removeChild(row);
        }

        row.appendChild(btn);

        table.appendChild(row);
    });

    myTable.appendChild(table);
}

function pushUser(){

    // Determine random user
    const randomNumber = Math.floor(Math.random() * newUsers.length);
    let randomUser = [newUsers[randomNumber]];
    
    // Add random user to array and update table
    if (newUsers.length > 0){
        Array.prototype.push.apply(users, randomUser);
        newUsers.splice(randomNumber);
        handleTable();
    } else {
        alert("Sorry, there are no new users to add.");
    }
}

window.onload = function(){
    handleTable();
}
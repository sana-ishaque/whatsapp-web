// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function (response) {
        // handle success
        for (let i = 0; i < response.data.length; i++) {
            let msgs = response.data[i];
            document.querySelector('ul').innerHTML += `
            <div id="main-div">
                <div>
                    <img class="image" src=${msgs.profilePic}>
                </div>
                <div class="content">
                    <div>
                        <h5>${msgs.name}</h5>
                        <p class="msg">${msgs.firstLine}</p>
                    </div>
                    <div class="time">
                    <p>${msgs.time}</p>    
                <p class="ur">${msgs.numbUnread}</p>
                    </div>
                </div>
            </div>
            `
        }

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
//  add includes method and show today yesterday accordingly
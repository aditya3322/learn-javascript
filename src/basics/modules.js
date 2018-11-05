function User() {
    let username, passsword;
    function doLogin(user,passsword) {
        username = user;
        passsword = passsword;
        // do rest of the things here
        console.log(`Login in with user, ${username}`);
    }
    var publicAPI = {
        login: doLogin
    }
    return publicAPI;
}

var publicAPI = User();
publicAPI.login('adi', 'pass');
// CAll Example
function setUserName(username){
    this.username = username
}
function createUser(username, email,password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}
const user = new createUser("AbulQasim","qasim@gmail","12345");
console.log(user);
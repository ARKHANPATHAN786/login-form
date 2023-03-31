// localStorage.setItem('name','Saad Ali')
// localStorage.setItem('name','Saad Muhammad')

// var a = localStorage.getItem('name')
// document.write(a)

// localStorage.clear()

// sessionStorage.setItem('name','Huzaifa')

function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('email',email)
    localStorage.setItem('pass',pass)

    var pass = document.getElementById('lpass').value
    var getpass = localStorage.getItem('pass')
    if( pass === getpass ){
        alert('Login Success')
        location.href = './welcome.html'
    }
    else{
        alert('Jaa beta sign up kar k aa ...')
      
    }
 }
 
//  function signin(){

//      var pass = document.getElementById('lpass').value
//      var getpass = localStorage.getItem('pass')
//      if( pass === getpass ){
//          alert('Login Success')
//          location.href = './welcome.html'
//      }
//      else{
//          alert('Jaa beta sign up kar k aa ...')
//          location.href = './signup.html'
//      }
//  }

// homepage login button setup
//step-1: get  the input of mobile number
document.getElementById('login-btn').addEventListener("click",function(){
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

    //step-2: get the input of pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    //step-3: match mobile number & pin
    if(contactNumber=="01540785135" && pin =="2503")
    {
        //step-4: if true -> return alert success
        alert("login successful");
        // window.location.replace("/home.html");
        window.location.assign("/home.html");
    }
    else{
        //step-5: if false -> return alert failed
        alert("login failed");
        return;
    }

})










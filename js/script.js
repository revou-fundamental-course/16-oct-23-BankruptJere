function validateForm(){
    const name = document.forms['message-form']['formName'].value
    const dob = document.forms['message-form']['dob'].value
    const gender = document.forms['message-form']['gender'].value
    const pesan = document.forms['message-form']['textBox'].value
    const today = new Date();
    
    if(name == ''){
      document.getElementById("error-all").innerHTML = "Name cannot Be Empty!"
  
      return false
    }

    if(dob == ''){
        document.getElementById("error-all").innerHTML = "Date of Birth Cannot Be Empty!"
    
        return false
      }

      if(gender == ''){
        document.getElementById("error-all").innerHTML = "Please pick a gender!"
        return false
      }


      if(pesan== ''){
        document.getElementById("error-all").innerHTML = "Please enter your message!"
        return false
      }





    document.getElementById("time_text").innerHTML = "Current Time : "+today;
    document.getElementById("name_text").innerHTML = "Nama : "+name;
    document.getElementById("dob_text").innerHTML = "Tanggal Lahir : "+dob;
    document.getElementById("gender_text").innerHTML = "Jenis Kelamin : "+gender;
    document.getElementById("message_text").innerHTML="Pesan : "+pesan;
    return false;
  } 
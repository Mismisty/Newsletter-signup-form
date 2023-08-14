let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
    form = id("form"),
    errorMsg = classes("error-msg"),
    confirmation = classes("confirmation"),
    successMsg = id("success");

    form.addEventListener("submit", (e) => {
        e.preventDefault();


        if(email.value.trim() === ''){
            errorMsg[0].innerHTML = 'Valid email required';
            email.style.border = '1.2px solid hsl(4, 100%, 67%)';
            email.style.backgroundColor = 'hsl(4, 100%, 95%)';
            document.getElementsByName('email')[0].placeholder = 'ash@lorem.com';
            
        }else{
            errorMsg[0].innerHTML = '';
            email.style.border = '';
            email.style.backgroundColor = '';
            successMsg.style.display = 'block';
            
        }  
         
    });

    

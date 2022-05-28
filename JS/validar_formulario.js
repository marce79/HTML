function validar_envio() {
    if (document.contacto.fname.value.length == 0) {    //valida nombre
        alert("Tenés que escribir tu nombre.")
        document.contacto.fname.focus()
        return 0;
    }

    if (document.contacto.lname.value.length == 0) {    //valida apellido
        alert("Tenés que escribir tu apellido.")
        document.contacto.lname.focus()
        return 0;
    }

    validar_email(contacto.email.value)  //valida mail
    
        
    if (document.contacto.fnac.selectedIndex == 0) {   //validaría fecha de nacimiento, 
        alert("Debés indicar tu fecha de nacimiento.")  //pero no encontré cómo hacerlo
        document.contacto.fnac.focus()
        return 0;
    }

    if (document.contacto.celiac.selectedIndex == 0) {   //valida celíacx
        alert("Debés indicar si sos celíacx o no.")
        document.contacto.celiac.focus()
        return 0;
    }

    if (document.contacto.comment.value.length == 0) {   //valida comentario
        alert("Tenés que escribir un comentario.")
        document.contacto.comment.focus()
        return 0;
    }

    alert("Muchas gracias por contactarnos. A la brevedad te responderemos.");
    document.contacto.submit();
}

function validar_email(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("Tenés que ingresar una dirección de correo válida.")
    return (false)
}

function validarForm(formulario){
    var x = document.getElementById("email")
    var y=  document.getElementById("name")
    var z=  document.getElementById("msg")
  
    if (x.value == ""||x.value.indexOf('@', 0) == -1) {
    alert("Falta el arroba en el correo electronico")
    return false
    }
    else if(z.value=="") {
    alert("Falta colocar su mensaje")
    return false
    }
    else if(y.value=="") {
    alert("Falta colocar su nombre")
    return false
    }
    else {
      alert("Sus datos han sido enviados correctamente");
      document.formulario.submit()
      return true
    }
  }
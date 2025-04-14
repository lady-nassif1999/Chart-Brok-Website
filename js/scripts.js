function SendMail(){
   ( function(){
    emailjs.init("HJjkcqwV6DIGjSQuH");})();

    var params ={
        sendername : document.querySelector("#sendername").value,
        to : document.querySelector("#to").value,
        message : document.querySelector("#message").value,
    };
    var serviceID="service_94b1hlb";
    var templetID="template_jzu2z1u";
    

    emailjs.send(serviceID,templetID,params).
    then( res => {
        alert("email sent successfuly")
    })
    .catch();
    }
    

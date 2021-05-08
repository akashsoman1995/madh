$(document).ready(function(){
    $("#dis").validate({
        rules:{
            firstnm:{
                required:true,
                minlength:4
            },
            sure:{
                required:true,
                minlength:4,
                
            },
            
            idd:{
                required:true,
                maxlength:2,
                value:100
            },
            maill:{
                required:true,
                email:true
            },
            gender:{
                required:true
            },
            lang:{
                required:true
            }
            
           
        },
        messages:{
            idd:{
                required:"vayas onnu adikko",
                minlength:"100 thazhe adida"
            }
        }
        
    })
})
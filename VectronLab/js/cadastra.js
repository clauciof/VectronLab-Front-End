$(document).ready(function(){
    $("#menu-toggle").click(function() {
        $("#sidebar-wrapper").toggle(140, "swing");            
    
    });

    $("#lista_de_empresas").click(function() {
        $("#pagecontentwrapper").load('listar_empresas.html');            
    
    });

    $("#submit").click(function() {
     
      var nome = $("#nome").val();
      var codigo = $("#codigo").val();
      var cnpj = $("#cnpj").val();
      var fantasy_name = $("#nomefantasia").val();
      var owner1 = $("#socio1").val();
      var owner2 = $("#socio2").val();
      var website = $("#site").val();
      var phone = $("#telefone").val();
      var address = $("#endereco").val();
      
      $.ajax({
          
          url: 'http://35.233.181.190:8005/api/01114587/add_company/',
          method: 'post',
          data: {"code": codigo,
                 "name": nome,
                 "cnpj": cnpj,
                 "fantasy_name": fantasy_name,
                 "owner_1": owner1,
                 "owner_2": owner2,
                 "website": website,
                 "phone": phone,
                 "address": address
                },
         
          success: function(data){
             
          },
         beforeSend: function (data) {
          
          },
          complete: function (data) {
            
          },
          error: function (request, status, error) {
              alert(error, id);
          }
          
      });          
    
    });

       
    
    
});

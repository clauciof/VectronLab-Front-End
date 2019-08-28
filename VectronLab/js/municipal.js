

    $(document).ready(function(){
        $("#menu-toggle").click(function() {
          $("#sidebar-wrapper").toggle(140, "swing");    
        });
        //var is_sending = false;
        //if (is_sending) return false;
        //alert("oi");
        //var i=0;
        
        $.ajax({
          
          url: 'http://35.233.181.190:8005/api/01114587/process_list/',
          method: 'get',
          dataType: 'json',
         /* beforeSend: function () {
            is_sending = true;
          },
          complete: function () {
            is_sending = false;
          },  */
         success: function(data){
           
            
            $.each(data, function(i,data){
        
              var avisos = set_avisos(data);
    
              $("#tabela").append("<tr>");
              $("#tabela").append("<tr><td>"+data.code+"</td>"+"<td>"+data.name+"</td>"+
              "<td>"+avisos[0]+"</td>"+"<td>"+avisos[1]+"</td>"+"<td>"+avisos[2]+"</td>"+
              "<td>"+avisos[3]+"</td></tr>");
              $("#tabela").append("</tr>");
             // console.log("abbs");
              //i++;
             
              
            });
          }
          
        });
        
        
});


function set_avisos(data) {
    
    switch (data.process_1) {
            case 0:
              var aviso1 = "<button type=\"button\" class=\"btn btn-light bg-white\"></button>";
              break;

            case 1:
              var aviso1 = "<button type=\"button\" class=\"btn btn-success\"></button>";
              break;

            case 2:
              var aviso1 = "<button type=\"button\" class=\"btn btn-warning\"></button>";
              break;
            
            case 3:
              var aviso1 = "<button type=\"button\" class=\"btn btn-danger\"></button>";
              break;
          
            default:
              break;
    }

    switch (data.process_2) {
            case 0:
              var aviso2 = "<button type=\"button\" class=\"btn btn-light bg-white\"></button>";
              break;

            case 1:
              var aviso2 = "<button type=\"button\" class=\"btn btn-success\"></button>";
              break;

            case 2:
              var aviso2 = "<button type=\"button\" class=\"btn btn-warning\"></button>";
              break;
            
            case 3:
              var aviso2 = "<button type=\"button\" class=\"btn btn-danger\"></button>";
              break;
          
            default:
              break;
    }

    switch (data.process_3) {
      case 0:
              var aviso3 = "<button type=\"button\" class=\"btn btn-light bg-white\"></button>";
              break;

            case 1:
              var aviso3 = "<button type=\"button\" class=\"btn btn-success\"></button>";
              break;

            case 2:
              var aviso3 = "<button type=\"button\" class=\"btn btn-warning\"></button>";
              break;
            
            case 3:
              var aviso3 = "<button type=\"button\" class=\"btn btn-danger\"></button>";
              break;
          
            default:
              break;
    }

    switch (data.process_4) {
      case 0:
              var aviso4 = "<button type=\"button\" class=\"btn btn-light bg-white\"></button>";
              break;

            case 1:
              var aviso4 = "<button type=\"button\" class=\"btn btn-success\"></button>";
              break;

            case 2:
              var aviso4 = "<button type=\"button\" class=\"btn btn-warning\"></button>";
              break;
            
            case 3:
              var aviso4 = "<button type=\"button\" class=\"btn btn-danger\"></button>";
              break;
          
            default:
              break;
    }

    var avisos = [aviso1, aviso2, aviso3, aviso4];

    return avisos;
    
}
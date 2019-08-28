
function get(){
    $.ajax({
              
              url: 'http://35.233.181.190:8005/api/01114587/company_list/',
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
                
                 
                  $("#tabela").append("<tr id=\"apaga"+data.code+"\"><td>"+data.code+"</td>"+"<td>"+data.name+"</td>"+
                  "<td>"+data.cnpj+"</td>"+"<td>"+"<button type=\"button\" class=\" btn btn-danger text-light\" id='apaga"+data.code+"' \">APAGAR</button>"+"</td></tr>");
                 
                 // console.log("abbs");
                  //i++;
                  
                });
              }
              
            });
}
    $(document).ready(function(){
        //var table = $('#tabela');
        $(".table").on('click', '.btn',function() {
            var id = $(this).closest('tr').attr('id');
           // var id = this.id;
       
            $.ajax({
                
                url: 'http://35.233.181.190:8005/api/01114587/delete_company/',
                method: 'post',
                data: {"code":id[5]},
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

        get();
       
        //var is_sending = false;
        //if (is_sending) return false;
        //alert("oi");
        //var i=0;    
        
});

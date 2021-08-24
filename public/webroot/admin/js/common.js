$(document).ready(function() {            
            
            var elems = document.querySelectorAll('.js-switch');                
            for (var i = 0; i < elems.length; i++) {
               
                var switchery = new Switchery(elems[i], { color: '#1AB394', secondaryColor: '#ED5565', jackColor: '#ffffff', jackSecondaryColor: '#ffffff' });
            }                        

            var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
            var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

            var data1 = [
                { label: "Data 1", data: d1, color: '#17a084'},
                { label: "Data 2", data: d2, color: '#127e68' }
            ];
            


        }); 
       
$(function () {                
    $("#form").validationEngine();
    $("#forms").validationEngine();
    $("#about").validationEngine();
    $("#add_package_category").validationEngine();
    $("#validation_data").validationEngine();
    $("#doshor_upload").validationEngine();
    $("#category_data").validationEngine();
});
$(document).ready(function(){
    $('.dataTables-example').DataTable({
        pageLength: 25,
        responsive: true,
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [
           
        ]

    });

});



        function show_more1(transid) {

        $('#show_full1_span').show();
        $('#show_less1_span').hide();
        }
        function show_less1(transid) {
        $('#show_full1_span').hide();
        $('#show_less1_span').show();
        }

        function show_more2(transid) {

        $('#show_full1_span2').show();
        $('#show_less1_span2').hide();
        }
        function show_less2(transid) {
            
        $('#show_full1_span2').hide();
        $('#show_less1_span2').show();
        }
        function show_more3(transid) {

        $('#show_full1_span3').show();
        $('#show_less1_span3').hide();
        $("#before_append").css('overflow-x','scroll');
        }
        function show_less3(transid) {
        $('#show_full1_span3').hide();
        $('#show_less1_span3').show();
        $("#before_append").css('overflow','hidden');
        }
        
    
    
    function show_button(value) {

    $('#check_all_filed').prop('checked', false);       

   var check = []
            
    $("input[name='check_delete[]']:checked").each(function ()
    {
        check.push(String($(this).val()));
     });
        
    if(check.length>0){
        $('#show_delete').show();
    }else{
        $('#show_delete').hide();
    }
}
function check_all(){        

        if($('#check_all_filed').is(':checked')){
            
            $('.check_class').prop('checked', true);
            
        }else{
            $('.check_class').prop('checked', false);        }

        var check = []
            
        $("input[name='check_delete[]']:checked").each(function ()
        {
            check.push(String($(this).val()));
         });
            
        if(check.length>0){
            $('#show_delete').show();
        }else{
            $('#show_delete').hide();
        }
}


    function edit_data(transid) {
            $('html, body').animate({
                scrollTop: 0
             }, 'slow');
            var transid=transid;                        
            var current_url=$('#current_url').val()                                                
            $('#edit-data').modal('show');
            
             $.ajax({
                type:'POST',
                url:current_url+'/edit_data',
                data: {
                    transid: transid
                },
                
                success:function(data){
                    if(data==1){
                        location.reload();
                    }else{
                        $("#edit_data").html(data);    
                    }
                    
                }
             });
        
    }
   /* $("#flight_name").keypress(function(event) {        
      var inputValue = event.charCode;  
      if (!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 32 && inputValue != 0) && (inputValue!=46)) {
          event.preventDefault();
      }  
    });*/
    $('#flight_name').keypress(function (e) {
            var regex = new RegExp("^[a-zA-Z ]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }

            e.preventDefault();
            return false;
        });
    $(".only_character").keypress(function (e) {
            var regex = new RegExp("^[a-zA-Z ]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }

            e.preventDefault();
            return false;
        });
  
$('.decimal').keypress(function(event) {    

    var $this = $(this);
    if ($this.val().length == 0 && event.which == 48 ){
      return false;
   }else{
    if ((event.which != 46 || $this.val().indexOf('.') != -1) &&
       ((event.which < 48 || event.which > 57) &&
       (event.which != 0 && event.which != 8))) {
           event.preventDefault();
    }

    var text = $(this).val();
    if ((event.which == 46) && (text.indexOf('.') == -1)) {
        setTimeout(function() {
            if ($this.val().substring($this.val().indexOf('.')).length > 3) {
                $this.val($this.val().substring(0, $this.val().indexOf('.') + 3));
            }
        }, 1);
    }

    if ((text.indexOf('.') != -1) &&
        (text.substring(text.indexOf('.')).length > 2) &&
        (event.which != 0 && event.which != 8) &&
        ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
    }   
   }   
});

$('.decimal').bind("paste", function(e) {
var text = e.originalEvent.clipboardData.getData('Text');
if ($.isNumeric(text)) {
    if ((text.substring(text.indexOf('.')).length > 3) && (text.indexOf('.') > -1)) {
        e.preventDefault();
        $(this).val(text.substring(0, text.indexOf('.') + 3));
   }
}
else {
        e.preventDefault();
     }
});

   function get_action(transid) {
       

       var transid=transid;
       var value=$("#get_action_val_"+transid).val();
        if(value=='Edit'){           
           $("#get_action_val_"+transid).val('');
            edit_data(transid);        
        }else{
            $("#get_action_val_"+transid).val('');
            var r= confirm('Do you want to delete this?');
            if(r==true){ 
                 window.location = value;
            }        
            
        }
   }
function get_action1(transid) {
       

       var transid=transid;
       var value=$("#get_action_val_"+transid).val();
        if(value=='Edit'){           
           $("#get_action_val_"+transid).val('');
           var url=$("#get_edit_select_"+transid).attr('redirect_url');
           window.location = url; // redirect
        }else{
            $("#get_action_val_"+transid).val('');
            var r= confirm('Do you want to delete this?');
            if(r==true){ 
                 window.location = value;
            }        
            
        }
   }

/*$('#validation_data').submit(function (e) {
        
            var pass_val=$('#password').val();
            var count=$("#password").val().length;
            if(pass_val==''){
                e.preventDefault();
                $("#password").removeClass('success_cls');
                $("#password").addClass('error_cls');
                $('#show_pass').text('Password is required');
                $('#show_pass').show('');
            }
            if(count < 8){
                e.preventDefault();
            }
            if(count >= 8){
                var pwd=pass_val.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
                if(pwd==null && $("#password-confirm").val()!= $("#password").val()){
                    e.preventDefault();
                }else{
                    $('#validation_data').submit();
                }
            }
        });*/
    function char_check() {
        
        var pass_val=$('#password').val();
        
            var count=$("#password").val().length;
            if(count < 8){
                $("#password").removeClass('success_cls');
                $("#password").addClass('error_cls');
                $('#show_pass1').text('Minimum 8 chracters required');
                $('#show_pass1').show('');
            }else{
                $('#show_pass1').hide();
            }
            if(count >= 8){
                var pwd=pass_val.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
                if(pwd==null){
                    $("#password").removeClass('success_cls');
                    $("#password").addClass('error_cls');
                    $('#show_pass').text('The password must be contain an uppercase a lowercase and a digit');
                    $('#show_pass').show('');
                    
                    $("#validation_data").submit(function(e){
                        e.preventDefault();
                    });
                    
                }else{
                    $("#password").removeClass('error_cls');
                    $("#password").addClass('success_cls');
                    $('#show_pass').text('');
                    $('#show_pass').hide();
                    

                   // $("#form").submit();
                }
            }       
    }
    $("#description").keyup(function(){    
          $("#count1").text("Characters left: " + (200 - $(this).val().length));
    });
     $(document).ready(function () {
            $(".i-checks").iCheck({
                checkboxClass: "icheckbox_square-green",
                radioClass: "iradio_square-green", 
                
            });            

        });

 function get_package_details(transid) {
      var current_url=$('#current_url').val()                                                
      $("#package_tid").val(transid);
    
     $.ajax({
        type:'POST',
        url:current_url+'/package_details',
        data: {
            transid: transid
        },
        
        success:function(data){    
        
        //$("#get_desctiotion").show();

            //get_pkg_description();
            $("#get_package_details").html(data);

        }
     });   
 }

 function get_passenger_details(count) {



      var current_url=$('#current_url').val()                                                
    
            if($("#package_amount_front").val()!=0){
                var pacakge_amount=$("#package_amount_front").val();
            }else{
                var pacakge_amount=$("#package_amount").val();
            }

        var append_data = []
        $("input[name='get_total_pass_count[]']").each(function(){
                append_data.push(String($(this).val()));

          }); 
         
        var package_tid=$("#package_tid").val();
           


        var appen_data_count=append_data.length;
       var count= parseInt(count);
        
        if(appen_data_count > count){

            for(i=1; i<appen_data_count; i++){
                var zzz= ((count) + (i));
                $("#pass_details_"+zzz+"").remove();
            }
        }
        var total_amount=pacakge_amount*count;    
        
        
         
         var add_on_transid=null;
         fare_details(add_on_transid);

     $.ajax({
        type:'POST',
        url:current_url+'/get_passenger',
        data: {
            count: count,
            appen_data_count: appen_data_count,
            package_tid:package_tid
        },
        
        success:function(data){
            
            $("#package_cost").text(($.number(total_amount,2)));
            $("#get_passenger").append(data);
        }
     });   
 }
 function get_state(country_id) {
     
       var current_url=$('#current_url').val()   
    
         $.ajax({
            type:'POST',
            url:current_url+'/get_state',
            data: {
                country_id: country_id
            },
            
            success:function(data){
                $("#state").html(data);
            }
         });      
 }
 function get_state_multiple(country_id, append_state_id) {
     
       var current_url=$('#current_url').val()   
    
         $.ajax({
            type:'POST',
            url:current_url+'/get_state',
            data: {
                country_id: country_id
            },
            
            success:function(data){
                $("#state_"+append_state_id).html(data);
            }
         });      
 }
 $(".only_integer").keypress(function(event) {
  var inputValue = event.charCode;  
  if (!(inputValue >= 48 && inputValue <= 57)) {
    event.preventDefault();
  }  
});




function get_action_customer(transid,booking_tid) {
       
        var transid=transid;
       var value=$("#get_action_val_customer_"+transid).val();
       //alert(value);exit;
        if(value=='collact_payment'){
               $("#get_action_val_customer_"+transid).val('');
                payment_details(transid);        
        }else if(value=='add_pax'){                
                $("#add_extra_pax_"+transid).submit();


        }else{
           
            var r= confirm('Do you want to cancel booking?');
            if(r==true){ 
                  window.location = value;                 
            }       
        }
   }


function collact_payment(transid) {
            var transid=transid; 
            // alert(transid);exit;                        
            var current_url=$('#current_url').val()                                                
            $('#payment-data').modal('show');
            
             $.ajax({
                type:'POST',
                url:current_url+'/payment_details',
                data: {
                    transid: transid
                },
                
                success:function(data){
                    $("#payment_data").html(data);
                }
             });
        
    }

function trip_details_customer(transid) {
            var transid=transid; 
            // alert(transid);exit;                        
            var current_url=$('#current_url').val()                                                
            $('#trip-details').modal('show');
            
             $.ajax({
                type:'POST',
                url:current_url+'/trip_details',
                data: {
                    transid: transid
                },
                
                success:function(data){
                    $("#trip_details").html(data);
                }
             });
        
    }

function payment_details(transid) {
            var transid=transid; 
            // alert(transid);exit;                        
            var current_url=$('#current_url').val()                                                
            // $('#payment-details').modal('show');
            $('#payment-data').modal('show');
            
             $.ajax({
                type:'POST',
                url:current_url+'/payment_details_one',
                data: {
                    transid: transid
                },
                
                success:function(data){
                    // $("#payment_details").html(data);
                    $("#payment_data").html(data);
                }
             });
        
    }

    function fare_details(add_on_transid) {
        var current_url=$('#current_url').val() ;                                                           
        var package_tid=$("#package_tid").val();
        var total_number_pax=$("#total_number_pax").val();
        var append_data = [];
        $("input[name='get_total_pass_count[]']").each(function(){
                append_data.push(String($(this).val()));

          }); 
        var total_pass=append_data.length;

        if(add_on_transid!=''){
            var add_on_transid=add_on_transid;    
        }else{
            var add_on_transid='';
        }
        

         $.ajax({
            type:'POST',
            url:current_url+'/fare_details',
            /*data: {
                add_on_transid: add_on_transid,
                package_tid: package_tid,
                total_number_pax: total_pass
            },*/
            data: $('#form1').serialize(),
            
            success:function(data){
                $("#get_payment_details").html(data);

                var dis_amount=$('#dis_amount').val();
                discount_amount(dis_amount); 

                var final = $('#final_cost').val();
                var payment_amount = $('#payee_amount').val();
                if(parseFloat(final)<parseFloat(payment_amount)){
                    $('#payee_amount').val('');
                }

            }
         });
        
    }

    function confirm_details() {
        var current_url=$('#current_url').val() ;                                                           
        var package_tid=$("#package_tid").val();
        var add_on=$("#add_on").val();        
        var total_number_pax=$("#total_number_pax").val();
         $.ajax({
            type:'POST',
            url:current_url+'/confirm_details',
            /*data: {
                add_on: add_on,
                package_tid: package_tid,
                total_number_pax: total_number_pax
            },*/
            data: $('#form1').serialize(),
            success:function(data){
                $("#confirm_section").html(data);
            }
         });        
    }


function package_details(transid) {
            var transid=transid; 
            
            var current_url=$('#current_url').val()                                                
            $('#package-details').modal('show');
            
             $.ajax({
                type:'POST',
                url:current_url+'/package_details',
                data: {
                    transid: transid
                    
                },
                
                success:function(data){
                    $("#package_details").html(data);
                }
             });
        
    }


function check_due_amount(payee_amount) {
    
    var current_url=$('#current_url').val()                                                
    
     $.ajax({
        type:'POST',
        url:current_url+'/due_amount_check',
        data: {
            payee_amount: payee_amount,
            invoice_number: $("#invoice_number").val()
        },
        
        success:function(data){
            //$("#package_description").html(data);            
            if(data==1){
                $("#amount_error").show();
                $("#payment_submit").attr('type','button');
                //alert('Your Entered amount is grater than due amount');
                
            }else{                    
                $("#amount_error").hide();    
                $("#payment_submit").attr('type','submit');

            }
        }
     });

}

$("#password").blur(function(){
        // alert();
        var newpass= $('#password').val();
        var current_pass= $('#current_password').val();
        if(newpass==current_pass){
           $('#show_error_msg').show();
           $('#change_password').attr('type', 'button');
        }else{

            $('#show_error_msg').hide();
            $('#change_password').attr('type', 'submit');
        }    
   
    
 });

$(".number_character").keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z  0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }

        e.preventDefault();
        return false;
    });



      function payee_amount_advance(payee_amount) {
    
         var current_url=$('#current_url').val();
         var pkg_tid=$("#package_tid").val();  
         var total_number_pax=$("#total_number_pax").val();                                            
         var total_cost=$("#final_cost").val();
         

         if($("#add_on_0").is(":checked")){
            var add_on_transid=$("#add_on_0").val();
        }else{
            var add_on_transid=null;
        }
        if($("#add_on_1").is(":checked")){
            var add_on_transid=$("#add_on_1").val();
        }else{
            var add_on_transid=null;
        }
        
         $.ajax({
            type:'POST',
            url:current_url+'/payee_amount',
            data: {
                payee_amount: payee_amount,
                pkg_tid: pkg_tid,
                total_number_pax: total_number_pax,
                add_on_transid: add_on_transid,
                total_cost:total_cost
            },
            
            success:function(data){            
                if(data==1){                                
                    $("#amount_error").show();                    
                    $("#success_payment").val(1);
                    
                }else{                    
                    $("#amount_error").hide();                        
                    $("#success_payment").val(0);

                }
            }
         });

    }
    
    $('.formEmail').on('change', function() {

        var base_url=$('#base_url').val()
        // alert(base_url);exit;
        $.ajax({
            type:'POST',
            url:base_url+'/foorgot_pass_email',
            data: {
                'email' : $('.formEmail').val()
            },
            success:function(data){
                    
            if(data==1){

                $("#email_error").show();
                $("#email_submit").attr('type','button');
                $(".formErrorContent").hide();  
                //alert('Your Entered amount is grater than due amount');
            }else{                    
                $("#email_error").hide();    
                $("#email_submit").attr('type','submit');

            }
        }
        });
    });

    $(".only_character_package").keypress(function (e) {
            var regex = new RegExp("^[a-zA-Z\-\(\)\&) ]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }

            e.preventDefault();
            return false;
        });

 function show_less(transid) {
  
 $('#more_'+transid).show();
 $('#less_'+transid).hide();
}
function show_more(transid) {
    
 $('#more_'+transid).hide();
 $('#less_'+transid).show();
}




function get_bed() {
    var current_url=$('#current_url').val()                                                
    
     $.ajax({
        type:'POST',
        url:current_url+'/get_bed_details',
        data: $('#form1').serialize(),
        
        success:function(data){
            $("#get_bed").html(data);            
            
        }
     });
}


function add_on_selection(k) {

    $(k).find('.iradio_square-green').removeClass('checked');
    
      if($(k).find("#add_on_0").prop('checked')){ 

            $(k).find("#add_on_0").prop('checked', false);
      }
      else{ 
          
        $(k).find("#add_on_1").prop('checked', false);
      }
}






function get_vehicle_amount(vehicle_count) {
    var current_url=$('#current_url').val();
    var vehicle_transid=$("#vehicle_name").val();
        
     $.ajax({
        type:'POST',
        url:current_url+'/get_vehicle_cost',
        data: {
                vehicle_transid: vehicle_transid,
                vehicle_count: vehicle_count
            },
        
        success:function(data){
            $("#vehicle_cost").text(($.number(data,2)));  
            $("#total_vehicle_cost").val(data);  
            

            
        }
     });
}


function get_vahicle_amount() {
    
    if($("#vehicle_name option:selected").val() == "")
    {
    $("#vehicle_quantity option").each(function(){
    $('#vehicle_quantity option')
    .filter(function() {
    return !this.value || $.trim(this.value).length == 0;
    })
    .remove();
    });
    $('#vehicle_quantity').prepend("<option value='' selected='selected'>Select no of vehicles </option>");
    $("#vehicle_quantity").attr("disabled",true);
    }
    else
    {
    $("#vehicle_quantity").attr("disabled",false);
    }
    
    var current_url=$('#current_url').val();
    var vehicle_transid=$("#vehicle_name").val();
    var vehicle_count=$("#vehicle_quantity").val();
        
     $.ajax({
        type:'POST',
        url:current_url+'/get_vehicle_cost',
        data: {
                vehicle_transid: vehicle_transid,
                vehicle_count: vehicle_count
            },
        
        success:function(data){
            $("#vehicle_cost").text(($.number(data,2)));  
            $("#total_vehicle_cost").val(data);  
            

            
        }
     });
}

function get_phone_code(country_id) {

    var current_url=$('#current_url').val();    
        
     $.ajax({
        type:'POST',
        url:current_url+'/get_phone_code',
        data: {
                country_id: country_id,
                
            },
        
        success:function(data){
            
         $(".get_phone_code").text(data);

            
        }
     });
}


function get_phone_code_family(country_id) {
    
    var current_url=$('#current_url').val();    
        
     $.ajax({
        type:'POST',
        url:current_url+'/get_phone_code',
        data: {
                country_id: country_id,
                
            },
        
        success:function(data){
            
         $(".get_phone_code1").text(data);

            
        }
     });
}
$('.formEmail1').on('change', function() {

        var current_url=$('#current_url').val();    
        // alert(base_url);exit;
        $.ajax({
            type:'POST',
            url:current_url+'/foorgot_pass_email',
            data: {
                'email' : $('.formEmail1').val()
            },
            success:function(data){
                    
            if(data==1){

                $("#email_error").show();
                $("#email_submit").attr('type','button');
                $(".formErrorContent").hide();  
                //alert('Your Entered amount is grater than due amount');
            }else{                    
                $("#email_error").hide();    
                $("#email_submit").attr('type','submit');

            }
        }
        });
    });
function get_passenger_search() {
     var current_url=$('#current_url').val();  

     var departure_date=$("#departure_date").val();
     var search_value=$("#pkg_guctomer1").val();
     var invoice_no=$("#invoice_no").val();
     var package_tid=$("#package_tid").val();
     
          $.ajax({
            type:'POST',
            url:current_url+'/search_passenger_data',
            data: {
                search_value : search_value,
                departure_date : departure_date,
                invoice_no : invoice_no,
                package_tid : package_tid,
            },
            success:function(data){
               $('#fetch_data').html(data);
            
            }
        });  

}
function get_dep_date(package_tid) {
     var current_url=$('#current_url').val();  
     
          $.ajax({
            type:'POST',
            url:current_url+'/get_dep_date',
            data: {                
                package_tid : package_tid,
            },
            success:function(data){
               $('#departure_date').html(data);
            
            }
        });  

}
function get_invoice(package_tid) {
     var current_url=$('#current_url').val();  
     
      $.ajax({
        type:'POST',
        url:current_url+'/get_invoice',
        data: {                
            package_tid : package_tid,
        },
        success:function(data){
           $('#invoice_no').html(data);
        
        }
    });  

}
function get_agent_details(transid) {
            
    var transid=transid;                        
    var current_url=$('#current_url').val()                                                
    $('#agent-details').modal('show');
    
     $.ajax({
        type:'POST',
        url:current_url+'/agent_details',
        data: {
            transid: transid
        },
        
        success:function(data){
                
                $("#agent_details").html(data);    
            
            
        }
     });
    
}
  function get_disease_yes() {    
  
      $("#disease_details").css("display", "block");      
      
  }
  function get_disease_no() {      
      $("#disease_details").css("display", "none");      
      
  }

 
 function get_checkbox(bed_value, id, transid) {



     if(bed_value=='Double'){
         if($(".double_get_check_box_"+id).prop('checked') == true){
             //alert('checked');
             $(".double_get_check_box_"+id).prop("checked", true);
             $(".triple_get_check_box_"+id).prop("checked", false);    
         }else{
             //alert('unchecked');
             
             $(".double_get_check_box_"+id).prop("checked", false);
             $(".triple_get_check_box_"+id).prop("checked", false);    
         }
         
     }
      if(bed_value=='Triple'){
         if($(".triple_get_check_box_"+id).prop('checked') == true){
            // alert('checked');
              $(".triple_get_check_box_"+id).prop("checked", true);
             $(".double_get_check_box_"+id).prop("checked", false);
          }else{
              //alert('unchecked');
             
             $(".triple_get_check_box_"+id).prop("checked", false);
             $(".double_get_check_box_"+id).prop("checked", false);
          }
     }
 }
function get_invoice_list() {
     var current_url=$('#current_url').val();  

     var departure_date=$("#departure_date").val();     
     
     var package_tid=$("#package_tid").val();
     
          $.ajax({
            type:'POST',
            url:current_url+'/invoice_list',
            data: {                
                departure_date : departure_date,                
                package_tid : package_tid,
            },
            success:function(data){
               $('#invoice_no').html(data);
            
            }
        });  

}
$('#password').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});



        function discount_amount(payee_amount) {
            
        var discount = $("#dis_amount").val();
        if(discount == '')
        {
            $("#discount_reason").val('');
            $("#count_msg").text("Characters left: 300");
        }
       var current_url=$('#current_url').val();
         var total = parseInt(document.getElementById("totalval").value);
         var dis_reason=$("#discount_reason").val();
         
           if(payee_amount>total){

            $('#final_dis_ammount').hide();
            $('#equalshow').hide();
            $('#dis_error').show();
            $("#success_discount").val(1);

            

           }else{

                if(parseInt(payee_amount)>0){

                if(typeof dis_reason!='undefined'){
                     $("#discount_reason").val(dis_reason);
                }
                else{

            $("#discount_reason").val("N/A");
                }

            $("#discount_reason").val(dis_reason);
            $("#discount_reason_box").show();

            }else{


                if(typeof dis_reason!='undefined'){
                    
            $("#discount_reason").val(dis_reason);


                }else{

            $("#discount_reason").val("N/A");
                }
           
            $("#discount_reason_box").hide();

            }

            $('#dis_error').hide();
            
            $("#success_discount").val(0);



         $.ajax({
            type:'POST',
            url:current_url+'/discount',
            data: {
                total: total,
                payee_amount: payee_amount,
                
            },
            
            success:function(data){ 
            var $amount_r =  parseFloat(data).toFixed(2);    
                $('#final_dis_ammount').html('Total Cost: RM '+$amount_r);
                 $('#final_dis_ammount').show();
                $('#final_cost').val(data);
                $('#equalshow').show();
                $('#rev_discount').val(payee_amount);

                var final = $('#final_cost').val();
                var payment_amount = $('#payee_amount').val();
                if(parseFloat(final)<parseFloat(payment_amount)){
                    $('#payee_amount').val('');
                }

            }
         });
     }
     
    }

    function get_travel_class(serialid,transid) {
    var current_url=$('#current_url').val();
    
     
     $.ajax({
        type:'POST',
        url:current_url+'/get_travel_class',
        data: {
                class_tid: transid
            },
        
        success:function(data){
            
           
            $("#get_class_details_"+serialid).val(data);

            
        }
     });
}



function room_details(transid,passid,asd) {

        var current_url=$('#current_url').val() ;                                                         
        // alert(current_url);exit;
         $.ajax({
            type:'POST',
            url:current_url+'/room_details',
            data: {
                transid: transid,
            },
           
            
            success:function(data){
               // $("#getroom").append('<input type="hidden" name="get_room_details_'+passid+'" id="get_room_details" value="'+data+'">');
               $("#get_room_details_"+passid).val(data);

            }
         });

    }

   

    $('.formEmail_agent').on('change', function() {

    var current_url=$('#current_url').val(); 
    var trans=$('#transid').val();

    $.ajax({
    type:'POST',
    url:current_url+'/check_email',
    data: {
    'email' : $('.formEmail_agent').val(),
    'trans' : trans
    },
    success:function(data){

    if(data==1){

    $("#email_error").show();
    $("#email_submit").attr('type','button');
    $(".formErrorContent").hide(); 
    //alert('Your Entered amount is grater than due amount');
    }else{ 
    $("#email_error").hide(); 
    $("#email_submit").attr('type','submit');

    }
    }
    });
});

    $("#form1").on('keyup','#discount_reason',function(e){
var maxlen = $(this).attr('maxlength');
var length = $(this).val().length;
var left = 300 - length;
$("#count_msg").html("Characters left: "+left);
if(length > (maxlen-10) ){
$(this).text('max length '+maxlen+' characters only!')
}
else
{
$(this).text('');
}
});








// SAWAN IMPEX 20200808 - AHADUL//

 function get_upload_photo1(x) {
    $("#input_upload_"+x+"").trigger("click"); 
    }

    function show_photo1(input, x) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    var FileSize = input.files[0].size / 1024 / 1024; // in MB
        var FileType = input.files[0].type;
        var ext = $('#input_upload_'+x+"").val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['JPEG','PNG','JPG','png','jpg','jpeg']) == -1) {
            alert('invalid extension!');
            $("#input_upload_"+x+"").val('');
        }else{
        
    if(FileSize < 1){
    reader.onload = function (e) {
    $('#upload_photo_'+x+'')
    .attr('src', e.target.result)
    .width(100)
    .height(100);
    };
    reader.readAsDataURL(input.files[0]);
    }else{
        alert('Maximum file size 1MB can be upload');
        $(input).val('');
    }
    }
}
    }
    function get_upload_photo2(x) {
    $("#input_upload2_"+x+"").trigger("click"); 
    }

    function show_photo2(input, x) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
     var FileSize = input.files[0].size / 1024 / 1024; // in MB
        var FileType = input.files[0].type;
        var ext = $('#input_upload2_'+x+"").val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['JPEG','PNG','JPG','png','jpg','jpeg']) == -1) {
            alert('invalid extension!');
            $("#input_upload_"+x+"").val('');
        }else{
        
    if(FileSize < 1){
    reader.onload = function (e) {
    $('#upload_photo2_'+x+'')
    .attr('src', e.target.result)
    .width(100)
    .height(100);
    };
    reader.readAsDataURL(input.files[0]);
    }else{
        alert('Maximum file size 1MB can be upload');
        $(input).val('');
    }
    }
    }
    }

 
    function edit_action(transid) {
       //alert(uniqcode);

       var transid=transid;
       var value=$("#get_action_val_"+transid).val();
           // $("#get_action_val_"+transid).val('');
            edit_data(transid);        
   }
    function edit_data(transid) {
            $('html, body').animate({
                scrollTop: 0
             }, 'slow');
            var transid=transid;                        
            var current_url=$('#current_url').val();
           //alert(current_url);                                                
            // $('#edit-data').modal('show');
            
             $.ajax({
                type:'POST',
               url:current_url+'/edit_data',
              // url:'<?=base_url('admin/author_view/edit_data')?>',
             // url:'<?=base_url('Usercon/delete')?>',
                data: {
                    uniqcode: transid
                },
                
                success:function(data){
                    // alert(data);
                    if(data==1){
                        location.reload();
                    }else{
                        $("#edit_data").html(data);    
                    }
                    
                }
             });
    }

    function common_status_change(transid) {  

        var transid=transid;
        var transid = transid.replace(/ /g,'');
        var current_url=$('#current_url').val();

         $.ajax({                
            type:'post',                
            url:current_url+'/status',
            data: {                    
                uniqcode: transid,                    
            },                
            success:function(data){                                           
                          
            }

         });   
    }
    function category_change(transid) { 
        var transid=transid;
        var transid = transid.replace(/ /g,'');
        var current_url=$('#current_url').val();

        var item_name=$('#item_name').val();

         $.ajax({                
            type:'post',                
            url:current_url+'/item-form',
            data: {                    
                transid: transid,                    
            },                
            success:function(data){
            if(data != '') {
            $('#item_form').show();        
            $('#item_form').html(data);    
            $('#item_name').val(item_name);
            }else{      
            $('#item_form').hide();                                         
            }
        }

         });   

    }
     $(document).ready(function() {
         $(".summernote").summernote({
        height: 200,
        toolbar: [
            // [ 'style', [ 'style' ] ],
            [ 'font', [ 'bold', 'clear'] ],
            // [ 'fontname', [ 'fontname' ] ],
            [ 'fontsize', [ 'fontsize' ] ],            
            // [ 'para', [ 'ol', 'ul', 'paragraph', 'height' ] ],    
            [ 'para', [ 'ol', 'ul',  'height' ] ],        
            [ 'view', [ 'undo', 'redo', 'fullscreen' ] ]
        ]
        });
        });

     $('#forms').on('submit', function(e) {

          if($('#testing_details').summernote('isEmpty')) {
            e.preventDefault();
             $("#testing_error").show();
            $("#testing_error").text('Testing details is required');
          }
          else {
             $("#testing_error").hide();
          return true;
          }
     });
     
     $('#about').on('submit', function(e) {

          if($('#description').summernote('isEmpty')) {
            e.preventDefault();
             $("#description_error").show();
            $("#description_error").text('Description details is required');
          }
          else {
             $("#testing_error").hide();
          return true;
          }
     });

    function del_img(image_name,id){

    var image_name=image_name;
    var count=$('.del_icon').data('id');

    var current_url=$('#current_url').val();
    var transid=$('.del_icon').data("transid");

    var con=confirm('Do you want to delete this image?');
// alert(transid);
       if (con==true) {
         $.ajax({
                type:'POST',
                url:current_url+'/item-image-delete',
                data: {
                    image_name : image_name,
                    transid : transid,
                },
                
                success:function(data){                    
                    // var dd=data.split('/');
                    // alert(dd[1]);
                if('a:0:{}' == data){
                $("#selected_images_count").val('0');
                    }
                $("#uploaded_item_image").val(data);
                $(".del_image_"+id).css('display','none');
                $(".show_image_icon_"+id).css('display','block');


                }
             });
        

      }
}
     function readURL3(input) {        

        $("#uploadFile1").val($('#uploadBtn1').val());
        if (input.files && input.files[0]) {

            var FileSize = input.files[0].size / 1024 / 1024; // in MB
            if (FileSize > 2) {
                alert('Maximum file size 2MB can be upload');
                $(input).val(''); //for clearing with Jquery
                $("#blah3").css('display', 'none');
                $("#blah3").val('');
            }else{
                
                $("#image_file3").removeClass('error_cls');
                $("#image_file").addClass('success_cls');
                $('.formErrorArrow').hide();
                $(".formErrorContent").text("");
                $("#blah3").css('display', 'block');
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah3')
                        .attr('src', e.target.result)
                        .width(100)
                        .height(100);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    }

     function get_banner() {
    $("#input_upload_banner").trigger("click"); 
    }

    function show_photo_banner(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
     var FileSize = input.files[0].size / 1024 / 1024; // in MB
        var FileType = input.files[0].type;
        var ext = $('#input_upload_banner').val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['JPEG','PNG','JPG','png','jpg','jpeg']) == -1) {
            alert('invalid extension!');
            $("#input_upload_banner").val('');
        }else{
        
    if(FileSize < 1){
    reader.onload = function (e) {
    $('#upload_photo_banner')
    .attr('src', e.target.result)
    .width(100)
    .height(100);
    };
    reader.readAsDataURL(input.files[0]);
    }else{
        alert('Maximum file size 1MB can be upload');
        $(input).val('');
    }
    }
    }
    }
        function edit_banner(transid) {

             $('#edit-category').modal('show');
             var current_url=$('#current_url').val();

              $.ajax({
                type:'POST',
                url:current_url+'/edit-banner',
                data: {
                    transid : transid,
                },
                
                success:function(data){             
          
                    $("#edit_banner").html(data);
                }
             });

        }
        function goBack() {
          window.history.back();
        }
            $(".cancel").click(function(){
                $("#reset_cat").hide();
                $("#reset_cat1").show();
                });

// image insert...
function get_upload_logo(x) 
{
    $("#logo_input_upload").trigger("click"); 
}
function logo_show_photo(input, x) 
{
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    var FileSize = input.files[0].size / 1024 / 1024; // in MB
        var FileType = input.files[0].type;
        var ext = $('#logo_input_upload').val().split('.').pop().toLowerCase();
        if($.inArray(ext, ['JPEG','PNG','JPG','png','jpg','jpeg']) == -1) {
            alert('invalid extension!');
            $("#logo_input_upload").val('');
        }else{
        
    if(FileSize < 1){
    reader.onload = function (e) {
    $('#upload_logo')
    .attr('src', e.target.result)
    .width(100)
    .height(100);
    };
    reader.readAsDataURL(input.files[0]);
    }else{
        alert('Maximum file size 1MB can be upload');
        $(input).val('');
    }
    } 
    }
}
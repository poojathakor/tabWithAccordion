
/* ###################################################################################################
Tab Module
 ###################################################################################################*/
 $( function() {
    $( "#tabs" ).tabs();

     $( "#accordion" ).accordion({
        heightStyle: "content"
    });
  } );

$("#tab_display").change(function(){
    console.log("on change event");
    if ($("#tab_display").is(":checked")){
         console.log("1");
           $("#li_tab3").show();
           $("#li_tab3").css("display","inline");
    }
    if (!($("#tab_display").is(":checked"))){
         console.log("1");
           $("#li_tab3").hide();
    }
});
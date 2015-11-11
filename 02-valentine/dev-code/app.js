/* your code should go here */

var tmpl =  '<li>' +
                '<img src="img/themeNUMBER.jpg">' +
                '<h2>TITLE</h2>' +
                '<button class="opt-choose" value="themeNUMBER">Choose</button>' +
            '</li>';
var picture = '<img src="img/VALUE.jpg">';


$(document).ready(function(){
    var i;
    for(i = 0; i < data.length; i++){
        $(".themes").append(tmpl.replace(/NUMBER/g, i+1).replace("TITLE", data[i].name));
    }
    
    $(".opt-choose").click( function () {
        
        // check for proper input
        if( $("#inputFrom").val() == "" || $("#inputTo").val() == "" || $("#inputMsg").val() == ""){
            alert("Please enter all fields");
        } else { // inputs are correctly filled
            
            $(".picture").html( picture.replace("VALUE", this.value) );
            $("#cardTo").html( $("#inputTo").val() );
            $("#cardMsg").html( $("#inputMsg").val() );
            $("#cardFrom").html( $("#inputFrom").val() );
            $("#preview").show();
        }
    });
    
});








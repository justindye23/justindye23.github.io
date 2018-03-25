    $(function(){
     $('dropdownMenu > li').click( function(){
        $(this).children("ul").slideDown(200);
        }, function(){
          $(this).children("ul").slideUp(200);

     })

    // $('#dropDownMenu > li').hover(function() {
       // $(this).children("ul").slideToggle(200);
    })


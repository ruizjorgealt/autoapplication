$(document).on('click', '.submenu li a', function() {
    switch ($(this).attr('href').substring(1)){
        case "customertable":
            fillcustomer
    }
}
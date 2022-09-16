function requestCheckHit(r_args){
    $.ajax({
        url: "../src/php/script.php",
        method: "POST",
        async: true,
        data: r_args,
        success: function (data) {
            addRow(data);
        },
        error: function (data) {
            alert(data);
        }
    });
}

// function requestCleanTable(){
//     $.ajax({
//         type: "DELETE",
//         url: "../src/php/script.php",
//         async: false,
//         success: function(data) {
//             alert(data);
//         },
//         error: function(data) {
//             alert(data);
//         }
//     });
// }
function requestCleanTable(){
    $.ajax({
        url: "../src/php/script.php",
        method: "POST",
        async: false,
        data: {"cleanTable": true},
        success: function(data) {
            alert(data);
        },
        error: function(data) {
            alert(data);
        }
    });
}

function requestGetTable(){
    let dataTable = "";
    $.ajax({
        type: "GET",
        url: "../src/php/script.php",
        async: false,
        success: function(data) {
            dataTable = data;
        },
        error: function(data) {
            alert(data);
        }
    });
    return dataTable;
}

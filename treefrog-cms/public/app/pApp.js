//update data
function addNavListener() {
    $("nav a").click(function(e) {
        console.log("updating data...")
        var id = e.currentTarget.id;
        var newNavName = $("#updateContent").val();
        PRACTICE_SERVICE.updateContent(id, newNavName, displayData)
    })
    $("#deleteData").click(function() {
        $("nav a").click(function(e) {
        console.log("deleting data...")
        var id = e.currentTarget.id;
        PRACTICE_SERVICE.deleteData(id, displayData)
        })
    })
}
//display data
function displayData(addData) {
  
    var container = '<nav>';
        addData.forEach(function(doc) {
            var id = doc.id;
            var rawData = doc.data();
            console.log(rawData.navName);  
            container += `<a href="#" styles="margin-right: 15px" id="${id}">${rawData.navName}</a>`;
        })
    container += '</nav>';
    $(".showData").html(container);
    addNavListener();
}

function init() {
    
    $('#getData').click(function(e) {
        console.log("getting data...")
        PRACTICE_SERVICE.getAllData(displayData);
    });

    $('#addData').click(function(e) {
        e.preventDefault();
        //get info from input box
        let nName = $('#navInput')
        .val()
        .trim()
        //lowercase input
        .toLowerCase()

        //submit
        if (nName != '') { 
            console.log('Nav Name: ', nName); 
            PRACTICE_SERVICE.checkPages(nName, alertUser); 
            $('navInput').val('');
        } else { 
            alert('add name'); 
        }
        
        
    });
    /*
    $('#checkPages').click(function(e) {
        e.preventDefault();
        console.log("Check Data")
        PRACTICE_SERVICE.checkPages('home'); 
    });
    */
}
function alertUser(result) {
    alert(result);
}

$(document).ready(function() {
    //alert('alert');
    PRACTICE_SERVICE.initFirebase(init);
})
function init() {


    $("#addItemBtn").click(function(e) {
        e.preventDefault();
        let itemName = $("#addItem").val();
        if (itemName != '') { 
            console.log('Item Name: ', itemName); 
            PRACTICE_SERVICE.checkItems(itemName, alertUser); 
            $('#addItem').val('');
            PRACTICE_SERVICE.getItems(displayItems);
        } else { 
            alert('Field Empty'); 
        }

    });
};

function displayItems(addItems) {
  
    var items = '<nav class="itemList">';
        addItems.forEach(function(doc) {
            var id = doc.id;
            var rawData = doc.data();
            console.log(rawData.name);  
            items += `<a href="#" styles="margin-right: 15px" id="${id}">- ${rawData.name}</a></br>`;
        })
    items += '</nav>';
    $(".groceryListContainer").html(items);
    
}

function alertUser(result) {
    alert(result);
}

$(document).ready(function() {
    PRACTICE_SERVICE.initFirebase(init);
   
})
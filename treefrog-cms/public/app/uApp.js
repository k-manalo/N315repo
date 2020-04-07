function init() {


    $("#addItemBtn").click(function(e) {
        e.preventDefault();
        let itemName = $("#addItem").val();
        if (itemName != '') { 
            console.log('Item Name: ', itemName); 
            PRACTICE_SERVICE.checkItems(itemName, alertUser, displayItems); 
            //$('#addItem').val('');
            PRACTICE_SERVICE.getItems(displayItems);
        } else { 
            $(".alertBox").html("Field empty.");
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
    addListener();
    
}

function addListener() {
    console.log("update activated")
    $("#updateItemBtn").click(function() {
        console.log("update clicked")
        $(".alertBox").html("Select an item to update.");

        $(".itemList a").click(function(e) {
            $(".alertBox").html("Updating...");
            var id = e.currentTarget.id;
            var newItemName = $("#updateItem").val();
            PRACTICE_SERVICE.updateItems(id, newItemName, displayItems)
            $(".alertBox").html(newItemName + " updated.");
            })
      
    })
    $("#deleteItem").click(function() {
        $(".alertBox").html("Select an item to delete.");

        $(".itemList a").click(function(e) {
            $(".alertBox").html("Deleting...");
        var id = e.currentTarget.id;
        PRACTICE_SERVICE.deleteItems(id, displayItems)
        $(".alertBox").html("Item deleted.");
        })
    })
}

function alertUser(result) {
    alert(result);
}

$(document).ready(function() {
    PRACTICE_SERVICE.initFirebase(init);
   
})
var PRACTICE_SERVICE = (function() {
    var _db;
    //get items
    var _getItems = function(callback) {
        
        _db
        .collection('itemName')
        .get()
        .then(function(querySnapshot) {
            callback(querySnapshot);
        }); 
    };
    //check duplicates
    var _checkItems = function(groceryItemName, callback) { 
        var gItemName = _db.collection('itemName'); 
        gItemName 
            .where('name', '==', groceryItemName) 
            .get() 
            .then(function(querySnapshot) { 
                if (querySnapshot.empty) { 
                    _addItem(groceryItemName, callback);
                } else { 
                    callback('Duplicate');
                } 
            }) 
            .catch(function(error) { 
                console.error('Error adding document: ', error); 
            }); 
        }

        //add items
        var _addItem = function(itemName) {
           
            let pageData = {
                name: itemName
            };
    
            _db
                .collection('itemName')
                .add(pageData)
                .then(function(docRef) {
                    console.log('ID: ', docRef.id);
                    $(".alertBox").html("Item Added");
                 
                })
                .catch(function(error) {
                   
                    console.log('Error adding document: ', error)
                })
        }

    var _initFirebase = function(callback) {
        console.log("initialized")
        firebase
            .auth()
            .signInAnonymously()
            .then(function(result) {
                console.log('connected');
                _db = firebase.firestore();
                callback();
            })
    };
    
    return {
        initFirebase: _initFirebase,
        checkItems: _checkItems,
        addItem: _addItem,
        getItems: _getItems
    }
})();
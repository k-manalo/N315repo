var PRACTICE_SERVICE = (function() {
    var _db;

    var _getAllData = function(callback) {
        
        _db
        .collection('Pages')
        .get()
        .then(function(querySnapshot) {
            callback(querySnapshot);
        }); 
    };

    var _updateData = function(id, newContent, callback) {
        var newObj = { navName: newContent };

        _db.collection('Pages').doc(id).update(newObj).then
        (function() {
            _getAllData(callback);
        })
    }

    var _deleteData = function(id, callback) {
        var newObj = { navName: deleteContent };

        _db.collection('Pages').doc(id).delete(id).then
        (function() {
            _getAllData(callback);
        })
    }

    var _addData = function(navName, callback) {
        //start loading
        let pageFakeData = {
            navName: navName,
            content: '<h1>HELLO</h1>',
            subNavs: []
        };

        _db
            .collection('Pages')
            .add(pageFakeData)
            .then(function(docRef) {
                console.log('ID: ', docRef.id);
                callback('New Nav Added')
                //end loading
            })
            .catch(function(error) {
                //end loading and add alert for error
                console.log('Error adding document: ', error)
            })
    }

    var _checkPages = function(mainNavName, callback) { 
        var pages = _db.collection('Pages'); 
        pages 
            .where('navName', '==', mainNavName) 
            .get() 
            .then(function(querySnapshot) { 
                if (querySnapshot.empty) { 
                    _addData(mainNavName, callback);
                } else { 
                    callback('Duplicate');
                } 
            }) 
            .catch(function(error) { 
                console.error('Error adding document: ', error); 
            }); 
        }

    var _initFirebase = function(callback) {
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
        checkPages: _checkPages,
        getAllData: _getAllData,
        updateContent: _updateData,
        deleteData: _deleteData
    }
})();
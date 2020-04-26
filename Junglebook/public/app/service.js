var RECIPE_SERVICE = (function() {

    var _db;

    var _getAllData = function(callback) {
        
        _db
        .collection('Recipes')
        .get()
        .then(function(querySnapshot) {
            callback(querySnapshot);
        }); 

          
    };

    var _updateData = function(id, newName, newDesc, newTime, newServ, newIng1, newIng2, newIng3, newIns1, newIns2, newIns3, newView, newDelete, newUpdate, newImage) {
        var newObj = { 
            name: newName,
            desc: newDesc,
            time: newTime,
            serv: newServ,
            ing1: newIng1,
            ing2: newIng2,
            ing3: newIng3,
            ins1: newIns1,
            ins2: newIns2,
            ins3: newIns3,
            view: newView,
            delete: newDelete,
            update: newUpdate,
            image: newImage };

        _db.collection('Recipes').doc(id).update(newObj).then
        (function() {
            _getAllData();
            alert("Recipe Updated")
        })
    }

    var _addData = function(name, desc, time, serv, ing1, ing2, ing3, ins1, ins2, ins3, view, rdelete, update, image) {
        //start loading
        let pageFakeData = {
            name: name,
            desc: desc,
            time: time,
            serv: serv,
            ing1: ing1,
            ing2: ing2,
            ing3: ing3,
            ins1: ins1,
            ins2: ins2,
            ins3: ins3,
            view: view,
            delete: rdelete,
            update: update,
            image: image
            
        };

        _db
            .collection('Recipes')
            .add(pageFakeData)
            .then(function(docRef) {
                console.log('ID: ', docRef.id);
                alert('New Recipe Added')
                //end loading
            })
            .catch(function(error) {
                //end loading and add alert for error
                console.log('Error adding document: ', error)
            })
    }
    


   var _checkPages = function(recipeName, recipeDesc, recipeTime, recipeServ, recipeIng1, recipeIng2, recipeIng3, recipeIns1, recipeIns2, recipeIns3, recipeView, recipeDelete, recipeUpdate, recipeImage) { 
    var recipes = _db.collection('Recipes'); 
    recipes 
        .where('name', '==', recipeName)
        .where('desc', '==', recipeDesc)
        .where('time', '==', recipeTime)
        .where('serv', '==', recipeServ)
        .where('ing1', '==', recipeIng1)
        .where('ing2', '==', recipeIng2)
        .where('ing3', '==', recipeIng3)
        .where('ins1', '==', recipeIns1)
        .where('ins2', '==', recipeIns2)
        .where('ins3', '==', recipeIns3)
        .where('view', '==', recipeView)
        .where('delete', '==', recipeDelete)
        .where('update', '==', recipeUpdate)
        .where('image', '==', recipeImage)
          
        .get() 
        .then(function(querySnapshot) { 
            if (querySnapshot.empty) { 
                _addData(recipeName, recipeDesc, recipeTime, recipeServ, recipeIng1, recipeIng2, recipeIng3, recipeIns1, recipeIns2, recipeIns3, recipeView, recipeDelete, recipeUpdate,
                recipeImage, recipeImage);
                
            } else { 
                alert('Duplicate');
            } 
        }) 
        .catch(function(error) { 
            console.error('Error adding document: ', error); 
        }); 
    }

    var _getBrowseContent = function() {
        let browseRecipes = `<div class="browse">
        </div>`
        return browseRecipes;
    }

    var _getCreateContent = function() {
        let createRecipes = ` <div class="create">
       
        <div class="r-container">
         <div class="r-title">
             <h1>Create your recipe!</h1>
         </div>
         <div class="r-img">
             <input type="text" id="addImg" placeholder="Add Recipe Image">
             <div class="attachFile">
                 <p>Attach File</p>
             </div>
         </div>
         <div class="r-name">
             <input type="text" id="addName" placeholder="Recipe Name">
         </div>
         <div class="r-desc">
             <input type="text" id="addDesc" placeholder="Recipe Description">
         </div>
         <div class="r-time">
             <input type="text" id="addTime" placeholder="Recipe Total Time">
         </div>
         <div class="r-size">
             <input type="text" id="addSize" placeholder="Recipe Serving Size">
         </div>
     </div>
     <div class="ing-container">
       <div class="ing-title">
           <h1>Enter Ingredients:</h1>
       </div>
       <div class="ing-1">
           <input type="text" id="addI1" placeholder="Ingredient #1">
       </div>
       <div class="ing-2">
           
               <input type="text" id="addI2" placeholder="Ingredient #2">
       </div>
       <div class="ing-3">
           
               <input type="text" id="addI3" placeholder="Ingredient #3">
       </div>
     </div>
     <div class="ins-container">
       <div class="ins-title">
           <h1>Enter Instructions:</h1>
       </div>
       <div class="ins-1">
           <input type="text" id="addIns1" placeholder="Instruction #1">
       </div>
       <div class="ins-2">
           <input type="text" id="addIns2" placeholder="Instruction #2">
       </div>
       <div class="ins-3">
           <input type="text" id="addIns3" placeholder="Instruction #3">
       </div>
       <a href="#">
           <div class="createBtn">
               <h1>Create Recipe</h1>
           </div> 
       </a> 
   </div>
      </div>`
        return createRecipes
    }
    
    var _getUpdateContent = function() {
        let updateContent = `<div class="u-r-container">
        <div class="u-r-title">
            <h1>Update your recipe!</h1>
        </div>
        <div class="u-r-img">
            <input type="text" id="u-addImg" placeholder="Add Recipe Image">
            <div class="u-attachFile">
                <p>Attach File</p>
            </div>
        </div>
        <div class="u-r-name">
            <input type="text" id="u-addName" placeholder="Recipe Name">
        </div>
        <div class="u-r-desc">
            <input type="text" id="u-addDesc" placeholder="Recipe Description">
        </div>
        <div class="u-r-time">
            <input type="text" id="u-addTime" placeholder="Recipe Total Time">
        </div>
        <div class="u-r-size">
            <input type="text" id="u-addSize" placeholder="Recipe Serving Size">
        </div>
    </div>
    <div class="u-ing-container">
      <div class="u-ing-title">
          <h1>Enter Ingredients:</h1>
      </div>
      <div class="u-ing-1">
          <input type="text" id="u-addI1" placeholder="Ingredient #1">
      </div>
      <div class="u-ing-2">
          
              <input type="text" id="u-addI2" placeholder="Ingredient #2">
      </div>
      <div class="u-ing-3">
          
              <input type="text" id="u-addI3" placeholder="Ingredient #3">
      </div>
    </div>
    <div class="u-ins-container">
      <div class="u-ins-title">
          <h1>Enter Instructions:</h1>
      </div>
      <div class="u-ins-1">
          <input type="text" id="u-addIns1" placeholder="Instruction #1">
      </div>
      <div class="u-ins-2">
          <input type="text" id="u-addIns2" placeholder="Instruction #2">
      </div>
      <div class="u-ins-3">
          <input type="text" id="u-addIns3" placeholder="Instruction #3">
      </div>
      <a href="#">
          <div class="updateBtn">
              <h1>Update Recipe</h1>
          </div> 
      </a> 
   </div>`;
      return updateContent;
    }


    var _deleteRecipe = function(id, callback) {
        
    
        _db.collection('Recipes').doc(id).delete().then
        (function() {
            _getAllData(callback);
        })
    }

    var _initFirebase = function(callback) {
        firebase
            .auth()
            .signInAnonymously()
            .then(function(result) {
                
                _db = firebase.firestore();
                console.log('connected');
                callback();
            })
    };

    
    return {
        getCreateContent: _getCreateContent,
        getBrowseContent: _getBrowseContent,
        getUpdateContent: _getUpdateContent,
        initFirebase: _initFirebase,
        checkPages: _checkPages,
        addData: _addData,
        getAllData: _getAllData,
        updateData: _updateData,
        deleteRecipe: _deleteRecipe
    }
})();
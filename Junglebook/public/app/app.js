

function displayData(addRecipes) {
  
    //browse

    var container = '<div style="display: flex; flex-direction: row;"> ';
   
        addRecipes.forEach(function(doc) {
            var id = doc.id;
            var rawData = doc.data();
            console.log(rawData.name);  
            container += `
            
              <div  class="b-item-container" style="margin-bottom: 100px;">
                  <div class="b-item-img" id="${id}" style="background-image: ${rawData.image}">
                  
                  </div>
                  <div class="b-item-info">
                      <div class="b-item-line">
                          <h1 id="${id}"> ${rawData.name}</h1>
                      </div>
                      <div class="b-item-desc">
                          <p id="${id}"> ${rawData.desc}</p>
                      </div>
                      <div class="b-time-container">
                          <div class="b-time-img"></div>
                          <div class="b-time">
                              <p id="${id}"> ${rawData.time}</p>
                          </div>
                      </div>
                      <div class="b-serving-container">
                          <div class="b-serving-img"></div>
                          <div class="b-serving">
                              <p id="${id}"> ${rawData.serv}</p>
                          </div>
                      </div>
                  </div>        
              </div>
            </div>`;
        })
    container += '</div>';
    
    $(".browseRecipes").html(container);
   
    //your recipes

    var container2 = '<div style="display: flex; flex-direction: column;"> ';
        addRecipes.forEach(function(doc) {
            var id = doc.id;
            var rawData = doc.data();
            console.log(rawData.name);  
            container2 += `
            
              <div  class="b-item-container" style="margin-bottom: 100px;">
                  <div class="b-item-img" id="${id}" style="background-image: ${rawData.image}">
                  <div class="view" id="${id}">
                <a href="#" class="viewBtn">
                  <p>View</p>
                </a>            
            </div>
                  </div>
                  <div class="b-item-info">
                      <div class="b-item-line">
                          <h1 id="${id}"> ${rawData.name}</h1>
                      </div>
                      <div class="b-item-desc">
                          <p id="${id}"> ${rawData.desc}</p>
                      </div>
                      <div class="b-time-container">
                          <div class="b-time-img"></div>
                          <div class="b-time">
                              <p id="${id}"> ${rawData.time}</p>
                          </div>
                      </div>
                      <div class="b-serving-container">
                          <div class="b-serving-img"></div>
                          <div class="b-serving">
                              <p id="${id}"> ${rawData.serv}</p>
                          </div>
                      </div>
                  </div>        
              </div>
            </div>
            <div class="update-container">
        <div class="edit">
            <a href="#" id="editBtn">
              <p id="${id}" class="updateID">Edit Recipe</p>
            </a>            
        </div>
        <div class="delete">
          <a href="#" id="deleteBtn">
            <p id="${id}" class="deleteID" >Delete</p>
          </a>            
      </div>
      </div>`;
            
            
        })
    container2 += '</div>';
    
    $(".browseRecipes2").html(container2);
    
    

    $(".view").click(function(e) {
        console.log("click")
        $(".user").css("display", "none");
        $(".viewPage").css("display", "block");

        var viewContainer = `<div>`;
        addRecipes.forEach(function(doc) {
        var id = e.currentTarget.id;
            var rawData = doc.data();
            console.log(rawData.name);  
            viewContainer += `<div class="topSection">
            <div class="vertName">
                <h1 id="${id}"> ${rawData.name}</h1>
            </div>
            <div class="viewImg" id="${id}" style="background-image: ${rawData.image}"></div>
            <div class="viewDesc-container">
                <div class="viewDescTitle"></div>
                <div class="viewDesc">
                    <h1>Description:</h1>
                    <p id="${id}"> ${rawData.desc}</p>
                </div>
                <div class="viewTime">
                    <h2>Total Time:</h2>
                    <p id="${id}"> ${rawData.time}</p>
                </div>
                <div class="viewServ">
                    <h2>Servings</h2>
                    <p id="${id}"> ${rawData.serv}</p>
                </div>
            </div>
        </div>
        <div class="bottomSection">
            <div class="viewIng">
                <h1>Ingredients:</h1>
                <p id="${id}">${rawData.ing1}</p>
                <p id="${id}">${rawData.ing2}</p>
                <p id="${id}">${rawData.ing3}</p>
            </div>
            <div class="viewIns">
                <h1>Instructions:</h1>
                <p id="${id}">${rawData.ins1}</p>
                <p id="${id}">${rawData.ins2}</p>
                <p id="${id}">${rawData.ins3}</p>
            </div>
            <div class="viewEditBtn">
                <a href="#">
                    <p>Edit</p>
                </a>
            </div>
        </div>`;
            num += 1;
            console.log(num);
    })
    viewContainer += '</div>';
    
    $(".viewPage").html(viewContainer);

    })

   deleteListener();
    updateListener();

    
}

function updateListener() {
    $('.updateID').click(function(e) {
        console.log("update clicked")
        $('.user').css("display", "none")
        $('.update').css('display', 'block')
        var id = e.currentTarget.id;
        $(".update").html(RECIPE_SERVICE.getUpdateContent(id, displayData))

        $('.updateBtn').click(function(e) {
            console.log("create clicked")
            e.preventDefault();
            //get info from input box
            let uName = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uDesc = $('#u-addDesc')
            .val()
            .trim()
            .toLowerCase()
            let uTime = $('#u-addTime')
            .val()
            .trim()
            .toLowerCase()
            let uSize = $('#u-addSize')
            .val()
            .trim()
            .toLowerCase()
            let uI1 = $('#u-addI1')
            .val()
            .trim()
            .toLowerCase()
            let uI2 = $('#u-addI2')
            .val()
            .trim()
            .toLowerCase()
            let uI3 = $('#u-addI3')
            .val()
            .trim()
            .toLowerCase()
            let uIns1 = $('#u-addIns1')
            .val()
            .trim()
            .toLowerCase()
            let uIns2 = $('#u-addIns2')
            .val()
            .trim()
            .toLowerCase()
            let uIns3 = $('#u-addIns3')
            .val()
            .trim()
            .toLowerCase()
            let uView = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uDelete = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uUpdate = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uImage = $('#u-addImg')
            .val()
            
    
            //submit
            if (uName != '') { 
                 
                RECIPE_SERVICE.updateData(id, uName, uDesc, uTime, uSize, uI1, uI2, uI3, uIns1, uIns2, uIns3, uView, uDelete, uUpdate, uImage); 
                $('#u-addName').val('');
                //$('addDesc').val('');
                console.log("entered update data")
            } else { 
                alert('add name'); 
            }
            
            
        });
    })

    $('.viewEditBtn').click(function(e) {
        console.log("view edit btn clicked")
        $('.view').css("display", "none")
        $('.update').css('display', 'block')
        var id = e.currentTarget.id;
        $(".update").html(RECIPE_SERVICE.getUpdateContent(id, displayData))

        $('.updateBtn').click(function(e) {
            console.log("create clicked")
            e.preventDefault();
            //get info from input box
            let uName = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uDesc = $('#u-addDesc')
            .val()
            .trim()
            .toLowerCase()
            let uTime = $('#u-addTime')
            .val()
            .trim()
            .toLowerCase()
            let uSize = $('#u-addSize')
            .val()
            .trim()
            .toLowerCase()
            let uI1 = $('#u-addI1')
            .val()
            .trim()
            .toLowerCase()
            let uI2 = $('#u-addI2')
            .val()
            .trim()
            .toLowerCase()
            let uI3 = $('#u-addI3')
            .val()
            .trim()
            .toLowerCase()
            let uIns1 = $('#u-addIns1')
            .val()
            .trim()
            .toLowerCase()
            let uIns2 = $('#u-addIns2')
            .val()
            .trim()
            .toLowerCase()
            let uIns3 = $('#u-addIns3')
            .val()
            .trim()
            .toLowerCase()
            let uView = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uDelete = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uUpdate = $('#u-addName')
            .val()
            .trim()
            .toLowerCase()
            let uImage = $('#u-addImg')
            .val()
            
    
            //submit
            if (uName != '') { 
                 
                RECIPE_SERVICE.updateData(id, uName, uDesc, uTime, uSize, uI1, uI2, uI3, uIns1, uIns2, uIns3, uView, uDelete, uUpdate, uImage); 
                $('#u-addName').val('');
                //$('addDesc').val('');
                console.log("entered update data")
            } else { 
                alert('add name'); 
            }
            
            
        });
    })
}

function deleteListener() {
    $('.deleteID').click(function(e) {
        alert("Recipe Deleted")
        var id = e.currentTarget.id;
        RECIPE_SERVICE.deleteRecipe(id, displayData)
        
    })
   
}


function init() {

    RECIPE_SERVICE.getAllData(displayData)
    
    let navOpen = false;
    $(".bars").click(function(e) {

        if(navOpen) {
            $(".nav-holder").css("display", "none");
            navOpen = false;
        }else {
             $(".nav-holder").css("display", "flex");
             navOpen = true;
        }
    });

    

    $('.createBtn').click(function(e) {
        console.log("create clicked")
        e.preventDefault();
        //get info from input box
        let rName = $('#addName')
        .val()
        .trim()
        .toLowerCase()
        let rDesc = $('#addDesc')
        .val()
        .trim()
        .toLowerCase()
        let rTime = $('#addTime')
        .val()
        .trim()
        .toLowerCase()
        let rSize = $('#addSize')
        .val()
        .trim()
        .toLowerCase()
        let rI1 = $('#addI1')
        .val()
        .trim()
        .toLowerCase()
        let rI2 = $('#addI2')
        .val()
        .trim()
        .toLowerCase()
        let rI3 = $('#addI3')
        .val()
        .trim()
        .toLowerCase()
        let rIns1 = $('#addIns1')
        .val()
        .trim()
        .toLowerCase()
        let rIns2 = $('#addIns2')
        .val()
        .trim()
        .toLowerCase()
        let rIns3 = $('#addIns3')
        .val()
        .trim()
        .toLowerCase()
        let rView = $('#addName')
        .val()
        .trim()
        .toLowerCase()
        let rDelete = $('#addName')
        .val()
        .trim()
        .toLowerCase()
        let rUpdate = $('#addName')
        .val()
        .trim()
        .toLowerCase()
        let rImage = $('#addImg')
        .val()
        

        //submit
        if (rName != '') { 
            console.log('Recipe Name: ', rName);
            console.log('Recipe Desc: ', rDesc);
            console.log('Recipe Time: ', rTime);
            console.log('Recipe Size: ', rSize);
            console.log('Recipe Ingredient: ', rI1);
            console.log('Recipe Ingredient: ', rI2);
            console.log('Recipe Ingredient: ', rI3);
            console.log('Recipe Instruction: ', rIns1);
            console.log('Recipe Instruction: ', rIns2);
            console.log('Recipe Instruction: ', rIns3); 
            RECIPE_SERVICE.checkPages(rName, rDesc, rTime, rSize, rI1, rI2, rI3, rIns1, rIns2, rIns3, rView, rDelete, rUpdate, rImage); 
            $('#addName').val('');
            //$('addDesc').val('');
        } else { 
            alert('add name'); 
        }
        
        RECIPE_SERVICE.updateData(id, displayData);
    });

   
}

function navListener() {
    
    $("#home").click(function(e) {
        $(".browse").css("display", "none");
        $(".create").css("display", "none");
        $(".loginPage").css("display", "none");
        $(".home").css("display", "block");
        $(".user").css("display", "none");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "none");

        $("#home").css("text-decoration", "underline");
        $("#browse").css("text-decoration", "none");
        $("#create-recipe").css("text-decoration", "none");
        $("#your-recipe").css("text-decoration", "none");
        $("#login").css("text-decoration", "none");
    })
    $("#browse").click(function(e) {
        $(".home").css("display", "none");
        $(".create").css("display", "none");
        $(".loginPage").css("display", "none");
        $(".browse").css("display", "block");
        $(".user").css("display", "none");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "none");

        $("#home").css("text-decoration", "none");
        $("#browse").css("text-decoration", "underline");
        $("#create-recipe").css("text-decoration", "none");
        $("#your-recipe").css("text-decoration", "none");
        $("#login").css("text-decoration", "none");
        //RECIPE_SERVICE.getAllData(displayData)
    })
    $("#create-recipe").click(function(e) {
        console.log("create clicked")
        $(".home").css("display", "none");
        $(".browse").css("display", "none");
        $(".loginPage").css("display", "none");
        $(".user").css("display", "none");
        $(".create").css("display", "block");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "none");

        $("#home").css("text-decoration", "none");
        $("#browse").css("text-decoration", "none");
        $("#create-recipe").css("text-decoration", "underline");
        $("#your-recipe").css("text-decoration", "none");
        $("#login").css("text-decoration", "none");
    })
    $("#your-recipe").click(function(e) {
        $(".home").css("display", "none");
        $(".browse").css("display", "none");
        $(".create").css("display", "none");
        $(".loginPage").css("display", "none");
        $(".user").css("display", "block");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "none");

        $("#home").css("text-decoration", "none");
        $("#browse").css("text-decoration", "");
        $("#create-recipe").css("text-decoration", "none");
        $("#your-recipe").css("text-decoration", "underline");
        $("#login").css("text-decoration", "none");
    })
    $("#login").click(function(e) {
        $(".home").css("display", "none");
        $(".browse").css("display", "none");
        $(".create").css("display", "none");
        $(".user").css("display", "none");
        $(".loginPage").css("display", "block");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "none");

        $("#home").css("text-decoration", "none");
        $("#browse").css("text-decoration", "none");
        $("#create-recipe").css("text-decoration", "none");
        $("#your-recipe").css("text-decoration", "none");
        $("#login").css("text-decoration", "underline");
    });
    $(".updateID").click(function(e) {
        $(".user").css("display", "none");
        $(".viewPage").css("display", "none");
        $(".update").css("display", "block");
    })
    
}


$(document).ready(function() {
    RECIPE_SERVICE.initFirebase(init);
    navListener();
    
    
   
})
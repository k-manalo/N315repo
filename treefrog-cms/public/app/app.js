

function initButtons() {
   
    $('#home').click(function() {
        $('#addNav div').removeClass('active');
        $('#home div').addClass('active');

        $("#createMainNav").off();

        $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());

        addGetStartedListener();
    })
};

function addGetStartedListener() {

    $(".get-started").click(function(e) {      
        $('#home div').removeClass('active');
        $('#addNav div').addClass(' active');
        $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButton());
        console.log("clicked");

        $('.get-started').off('click');
        addCreateMainNavListener();


        $(".main-nav").click(function(e) {
              $('.alert-box').html(TREEFROG_SERVICE.getCreateNavContent());
              $(".modal").css("display", "flex");            
              $(".cancel-btn").click(function(e) {
                  $('.alert-box').html(TREEFROG_SERVICE.getCreateNavContent());
                  $(".modal").css("display", "none");                 
              })
              $(".cmn-button").click(function(e) {
                  //default array for nav names
                 let navNamesArr = ["home", "about", "contact"];
                 //sets input value to new variable
                 var caseCheck = $("#navName").val().toLowerCase()
                 //consoles lowercase nav name
                 console.log(caseCheck);
                 //checks for empty input value
                  if($("#navName").val() == "") {
                        //if field is empty                
                    alert("Input field cannot be left empty.")
                        //if the field is not empty checks to see if caseCheck is in the array                    
                  }else if(navNamesArr.includes(caseCheck)){
                        //if name already exists
                    alert("Nav already exists! Please enter a new name.")                   
                  }else {
                        //if name does not exist

                        //pushes new nav name to array
                    navNamesArr.push(caseCheck);
                    console.log(caseCheck + " created!");
                    $('.text-wrapper').html(TREEFROG_SERVICE.getEditNavContent());
                    $('#editor-container').html(TREEFROG_SERVICE.getQuillEditor());
                    //call quillEditor function
                    quillEditor(); 
                    $('#addNav div').removeClass('active');
                    $('#editNav div').addClass(' active');
                    $(".modal").css("display", "none");
                    $("#createMainNav").css("display", "none");
                    $("#createSubNav").css("display", "none");
                  }
                  
              })
          })

          $(".sub-nav").click(function(e) {          
              $('.alert-box').html(TREEFROG_SERVICE.getCreateSubContent());
              $(".modal").css("display", "flex");
              $(".cancel-btn").click(function(e) {
                  $('.alert-box').html(TREEFROG_SERVICE.getCreateSubContent());
                  $(".modal").css("display", "none");
              })
          })

    });
    
}

function quillEditor() {
    console.log("Quill Open")
    var quill = new Quill($('#editor-container').html(TREEFROG_SERVICE.getQuillEditor()), {
   modules: {
       toolbar: [
       ["bold", "italic", "underline", "strike"],
       ["blockquote", "code-block"],
       [{header: 1}, {header: 2}],
       [{list: "ordered"}, {list: "bullet"}],
       [{script: "sub"}, {script: "super"}],
       [{indent: "-1"}, {indent:"+1"}],
       [{direction: "rt1"}],
       [{size: ["small", false, "large", "huge"]}],
       [{header: [1, 2, 3, 4, 5, 6, false]}],
       [{color: []}, {background: []}],
       [{font: []}],
       [{align: []}],
       ["clean"]
       ]
   },
   placeholder: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut maxime ipsum ipsa fuga nostrum natus pariatur neque officiis delectus explicabo minima temporibus repellat iusto laudantium atque maiores, quibusdam expedita!",
   theme: "snow"
   })

   return quill;
}

function addCreateMainNavListener() {
    $("#createMainNav").click(function(e) {
        console.log("addCreateMainNavListener")
        $('.modal').css('display', 'flex');
        $('closeModal').click(function() {
            closeModal();
        })
    })

}

function closeModal() {
    $('.clickBox').click(function() {
        $('.modal').css('display', 'none');
    })
    
}

$(document).ready(function() {
   initButtons();
   addGetStartedListener();
   closeModal();
   
   
});
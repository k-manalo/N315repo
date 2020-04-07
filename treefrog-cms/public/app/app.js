
function addMainNav(navName) {
    console.log('add', navName);

    let pageFakeData = {
        "navName": navName,
        "content": "<h1>HELLO</h1>",
        "subnavs": [
            {
                "navName": "home",
                "content": "<h1>HELLO</h1>"
            }
        ]
    }
}

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

            console.log('nav name', newNavName)

            let newNavName
            TREEFROG_SERVICE.checkMainNavName(newNavName, addMainNav);

            
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
                    
                    var toolbarOptions = [
                        ['bold', 'italic', 'underline', 'strike'], // toggled buttons 
                        ['blockquote', 'code-block', 'image', 'link'], 
                        [{ header: 1 }, { header: 2 }], // custom button values 
                        [{ list: 'ordered' }, { list: 'bullet' }], 
                        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript 
                        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent 
                        [{ direction: 'rtl' }], // text direction 
                        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown 
                        [{ header: [1, 2, 3, 4, 5, 6, false] }], 
                        [{ color: [] }, { background: [] }], // dropdown with defaults from theme 
                        [{ font: [] }], [{ align: [] }], ['clean'] // remove formatting button 
                       ]; 
                       var quill = new Quill('#editor-container', { 
                               modules: { 
                                   toolbar: toolbarOptions 
                               }, theme: 'snow' 
                           });                        
                         
                    console.log(caseCheck + " createdddd!");
                    $('.text-wrapper').html(TREEFROG_SERVICE.getEditNavContent(caseCheck));
                   
                    $('#addNav div').removeClass('active');
                    $('#editNav div').addClass(' active');
                    $(".modal").css("display", "none");
                    $("#createMainNav").css("display", "none");
                    $("#createSubNav").css("display", "none");
                  }

                  $('.saveData').click(function(e) {
                    console.log("saved") 
                    
                    e.preventDefault();  
                   
                    var justHtml = quill.root.innerHTML; 
                    $('#quillContent').html(justHtml);
                    setPages(justHtml);
                    $(".content-wrapper").css("display", "block"); 
                    $(".pageData").html(justHtml);
                    
                 });
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

function setPages() {

    //margin
    $('.ql-indent-0').css('margin-left', '0px');
    $('.ql-indent-1').css('margin-left', '35px');
    $('.ql-indent-2').css('margin-left', '70px');
    $('.ql-indent-3').css('margin-left', '105px');
    $('.ql-indent-4').css('margin-left', '140px');
    $('.ql-indent-5').css('margin-left', '175px');
    $('.ql-indent-6').css('margin-left', '210px');
    $('.ql-indent-7').css('margin-left', '245px');
    $('.ql-indent-8').css('margin-left', '280px');
    //text-align
    $('.ql-align-left').css('text-align', 'left');
    $('.ql-align-right').css('text-align', 'right');
    //text- size
    $('.ql-size-small').css('font-size', '10px');
    $('.ql-size-large').css('font-size', '30px');
    $('.ql-size-huge').css('font-size', '45px');
    //font-family
    $('.ql-font-serif').css('font-family', 'serif');
    $('.ql-font-monospace').css('font-family', 'monospace');
    //align-content
    $('.ql-align-left').css('align-items', 'left');
    $('.ql-align-center').css('align-items', 'center');
    $('.ql-align-right').css('align-items', 'right');
    $('.ql-align-justify').css('justify-content', 'center');


}



$(document).ready(function() {
   
   TREEFROG_SERVICE.initFirebase(); 
   initButtons();
   addGetStartedListener();
   closeModal();
   setPages();
   
 
   
   
});
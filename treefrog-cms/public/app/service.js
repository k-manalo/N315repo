var TREEFROG_SERVICE = (function() {

    var _getGetStartedContent = function() {
        let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

        return contentStr;
    };

    var _getCreateNavButton = function() {
        let buttonString = `<span id="createMainNav" class="btn btn-dark main-nav">Create Main Nav</span><span id="createSubNav" class="btn btn-dark sub-nav">Create Sub Nav</span>`
        return buttonString;
    }

   

    var _getHomeContent = function() {
        let homeContent = `<h1>Welcome to the Treefrog CMS</h1>
        <p>
          Here you will create your content for your webpages. You won't be able
          to create all page elements but only the content for the page.
        </p>

        <p>
          You must first create the navigation. Once you have the navigation
          created you can add page content and publish the page. You can even
          add sub navigation as well.
        </p>

        <p>
          Your fist step is to click on the Add Navigation link and add your
          first navigation link.
        </p>`;

        return homeContent;

    };

    var _getCreateNavContent = function() {
      let createNavContent = `<h2 style="margin-top: 20px;">Use this box to create navigation links.</h2>

      <p style="margin-bottom: 50px;">You can create main navigation and sub navigation. To create a sub navigation you will need to first select a main nav and then create the sub-nav.</p>
      
      <p>Using the text box below enter the name of your main navigation.</p>

      <input style="margin-bottom: -30px; border-radius: 10px; height: 40px; margin-bottom: 25px;" type="text" id="navName" name="navName"/>
      <p></p>

      <div class="btn-holder">
        <span class="btn btn-light cmn-button" style="margin-left: 100px;">Create Main Nav</span><span class="btn btn-light cancel-btn">Cancel</span>
      </div>
      `;

      return createNavContent;
    }
    

    var _getCreateSubContent = function() {
      let createSubContent = `<h2 >Create Sub Navigation</h2>

      <p>In order to create a sub navigation you need to select a main nav</p>
      <div class="labelHolder">
      
      <label id="navOptionsId" for="navOptions" style="color: white; border-radius: 10px; height: 40px;">Select a main navigation</label>

        <select id="navOptions">
          <option value="home">Home</option>
          <option value="products">Products</option>
          <option value="about">About</option>
          <option value="contact">Contact</option>
        </select>
      </div>
      

      <p>Using the text box below enter the name of your sub navigation</p>

      <input type="text" id="sNavName" name="sNavName" style="border-radius: 10px; height: 40px;"/><br><br><br>

      <div class="btn-holder">
      <span class="btn btn-light" style="margin-left: 100px;">Create Sub Nav</span><span class="btn btn-light cancel-btn">Cancel</span>
      </div>
      `;
      return createSubContent;
    }

    var _getHomeStartButton = function() {
        let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;

        return startBtn;
    }

    var _getEditNavContent = function() {
      let navContent = `<h2>Treefrog CMS</h2>
      <p>Now you have your navigation set now you can create your own content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have done that click on "REVIEW SITE" to see what your web page looks like.</p>
      
      <div class="btn-holder">
      <span class="btn btn-dark save-btn">Save Page Info</span>
      </div>`
      return navContent;
    }

    var _getQuillEditor = function() {
      let quillEditorContent = `<div id="editor-container" style="background-color: red; height: 200px; width: 100%"></div>`;
      
      return quillEditorContent;
    }
    
 
    return {
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButton: _getCreateNavButton,
        getHomeContent: _getHomeContent,
        getHomeStartButton: _getHomeStartButton,
        getCreateNavContent: _getCreateNavContent,
        getCreateSubContent: _getCreateSubContent,
        getEditNavContent: _getEditNavContent,
        getQuillEditor: _getQuillEditor
    };
})();
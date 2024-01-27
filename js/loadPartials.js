function loadPartialHTML_(partial){
    const htmlServ = HtmlService.createTemplateFromFile(partial);
    return htmlServ.evaluate().getContent();
  }
  
  function loadSearchView(){
    Logger.log("Entrei");
    return loadPartialHTML_("search");
  }
  
  function loadAddCustomersView(){
    return loadPartialHTML_("addcustomer");
  }
  
  function loadEditCustomersView(){
    return loadPartialHTML_("editcustomer");
  }
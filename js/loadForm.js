function loadMainForm() {
  
    const htmlServ = HtmlService.createTemplateFromFile("main");
    const html = htmlServ.evaluate();
    html.setWidth(850).setHeight(600);
    const ui=SpreadsheetApp.getUi();
    ui.showModalDialog(html,"Cadastro Cliente");
  
  }
  /* Criando o Menu na área da tabela */
  function createMenu_(){
    const ui=SpreadsheetApp.getUi();
    const menu = ui.createMenu("Menu Cadastro");
    menu.addItem("Open Form","loadMainForm");
    menu.addToUi();
  }
  
  function onOpen(){
  
    createMenu_();
  
  }
  
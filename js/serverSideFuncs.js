function getDataForSearch() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("bd_Cliente");
    return ws.getRange(2,1,ws.getLastRow()-1,4).getValues();
  }
  
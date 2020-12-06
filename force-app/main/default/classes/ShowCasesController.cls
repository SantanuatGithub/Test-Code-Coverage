public with sharing class ShowCasesController {
  @AuraEnabled(cacheable=true)
  public static List<Case> getCases() {
    List<Case> caseList = new List<Case>();

    caseList = [
      SELECT Id, CaseNumber, Origin, Status, Subject, CreatedDate
      FROM Case
      LIMIT 15
    ];
    //WHERE ContactId =: loggedinUserId];

    if (caseList != null && !caseList.isEmpty()) {
      system.debug('CaseList--->' + caseList);
      return caseList;
    }
    return null;
  }
}

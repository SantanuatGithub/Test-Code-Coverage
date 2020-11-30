public with sharing class ShowCasesController {
    
    @AuraEnabled(cacheable = true)
    public static List<Case> getCases(){
        List<Case> caseList = new List<Case>();

        caseList = [SELECT Id,
                           CaseNumber,
                           Origin,
                           Status,
                           Subject,
                           CreatedDate,
                           AccountId                           
                           FROM Case LIMIT 5];
                           //WHERE ContactId =: loggedinUserId]; 

        if(caseList != null && !caseList.isEmpty()){
            system.debug('CaseList--->'+caseList);
            return caseList;
        }
        return null;
    }
}
@isTest
private class ShowCasesControllerTest {
    
    @TestSetup
    static void makeData(){
        
        Case caseObj = new Case(Subject = 'Internet is not working in my machine', Status = 'New', Origin='Web');
        insert caseObj;

    }

    static testMethod void testShowCasesController() {
        ShowCasesController.getCases();    
    }
}

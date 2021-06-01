@isTest
public class SelectMenuCtrlTest {
	static testMethod void testSelectMenuCtrl() {
       List<SelectMenuCtrl.PicklistWrapper> wrapperList = SelectMenuCtrl.getPicklistValues('Account','Industry');   
       System.assert(wrapperList.size() > 0);   
    }
}
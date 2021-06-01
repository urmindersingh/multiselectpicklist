public class SelectMenuCtrl {
	@AuraEnabled
    public static List<PicklistWrapper> getPicklistValues(String sObjName, String fieldApiName) {
        List<PicklistWrapper> picklistValues = new List<PicklistWrapper>();
        Schema.sObjectType objType = Schema.getGlobalDescribe().get(sObjName);
        
        // Describe the SObject using its object type.
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        
        // Get a map of fields for the SObject
        Map<String,Schema.SObjectField> fieldMap = objDescribe.fields.getMap();
        
        // Get the list of picklist values for this field.
        List<Schema.PicklistEntry> peList = fieldMap.get(fieldApiName).getDescribe().getPickListValues();
        
        // Add these values to the list.
        for (Schema.PicklistEntry pe: peList) {
        	picklistValues.add(new PicklistWrapper(pe.getValue()));
        }
        return picklistValues;
    }
    public class PicklistWrapper {
        @AuraEnabled public String value;
        @AuraEnabled public Boolean isSelected;
        
        public PicklistWrapper(String value) {
            this.value = value;
            this.isSelected = false;
        }
    }
}
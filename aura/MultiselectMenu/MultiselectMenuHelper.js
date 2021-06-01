({
	selectValue : function(cmp, event, helper) {
        var source = event.target;
		var selCount = cmp.get("v.selCount");
        var selectedValArray = cmp.get("v.selectOptionArray");
        var selValues = [];
        cmp.set("v.selectedValue",source.title);
        for(var i = 0; i < selectedValArray.length; i++) {
	       	selValues.push(selectedValArray[i].value);
            if(selectedValArray[i].value == source.title) {
                selectedValArray[i].isSelected = selectedValArray[i].isSelected?false:true;
                if(selectedValArray[i].isSelected) {
                    selCount++;
                } else {
                    selCount--;
                }
            }
        }
        if(selValues.indexOf(source.title) == -1) {
            selectedValArray.push({value : source.title, isSelected : true});
            selCount++;
        } 
        cmp.set("v.selectOptionArray",selectedValArray);
        cmp.set("v.selCount",selCount);
        
        var selectedValues = '';
		for(var i = 0; i < selectedValArray.length; i++) {
        	if(selectedValArray[i].isSelected) {
            	selectedValues += selectedValArray[i].value + ';';
            }
        }
        cmp.set("v.selectedValues",selectedValues);
        //uncomment this if you want to close picklist on selection.
		//var cmpTarget = cmp.find('myPicklist');
        //$A.util.removeClass(cmpTarget, "slds-is-open");
        cmp.clickOption();
        
    }
})
({
    doInit: function(cmp) {
        // Set the attribute value. 
        // You could also fire an event here instead.
		console.log(cmp.get("v.ObjectName"));
        var action = cmp.get("c.getPicklistValues");
        action.setParams({ sObjName : cmp.get("v.ObjectName"), fieldApiName : cmp.get("v.mutliselectPicklistName")});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // get the value returned 
                // from the server
                cmp.set("v.selectOptionArray", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do some error handling if you want to do so
            } 
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    showOptions : function(cmp, event, helper) {
		var cmpTarget = cmp.find('myPicklist');
		$A.util.toggleClass(cmpTarget, "slds-is-open"); 
	},
    handleClick : function(cmp, event, helper) {
        console.log('You have selected : ' + cmp.get("v.selectedValue"));
    }, 
    selectValue : function(cmp, event, helper) {
        helper.selectValue(cmp, event, helper);
    }
})
// legalNameSection_firstName legalNameSection_lastName

function fillName(firstName, lastName) {
    enterValueByDataAutomationId("legalNameSection_firstName", firstName)
    triggerAFocusEventByDataAutomationId("legalNameSection_firstName")

    enterValueByDataAutomationId("legalNameSection_lastName", lastName)
    triggerAFocusEventByDataAutomationId("legalNameSection_lastName")

}

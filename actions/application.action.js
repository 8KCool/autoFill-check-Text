function fillApplication(
  canLegallyWork,
  backgroundCheck,
  verifyInformation,
  daily,
  visaRequired,
  previouslyWorkedAs
) {
  // find label with inner text of "Employee"
  const employee = document.evaluate(
    `//label[text()="${previouslyWorkedAs}"]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  // get parent div
  const employeeParentDiv = employee.parentElement;
  // get the first input in the div
  const employeeInput = employeeParentDiv.querySelector("input");
  // click the input
  employeeInput.click();

  setTimeout(() => {
    selectInputByDivScopeAutomationId(
      canLegallyWork,
      "305a1163be7301083ded7092b201bf8a"
    );
  }, 1000);

  setTimeout(() => {
    selectInputByDivScopeAutomationId(
      backgroundCheck,
      "305a1163be7301b985577192b201c88a"
    );
  }, 2000);

  setTimeout(() => {
    selectInputByDivScopeAutomationId(
      verifyInformation,
      "305a1163be7301c9e1697192b201cb8a"
    );
  }, 3000);

  setTimeout(() => {
    selectInputByDivScopeAutomationId(
      daily,
      "305a1163be73017aae7b7192b201ce8a"
    );
  }, 4000);

  setTimeout(() => {
    selectInputByDivScopeAutomationId(
      visaRequired,
      "305a1163be7301787b8d7192b201d18a"
    );
  }, 5000);
}

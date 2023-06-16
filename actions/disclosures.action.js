function fillDisclosures(disclosures) {
  const { veteran, gender, ethnicity } = disclosures;
  setTimeout(() => {
    selectInputByDivScopeAutomationId(veteran, "veteranStatus");
  }, 1000);
  setTimeout(() => {
    selectInputByDivScopeAutomationId(gender, "gender");
  }, 3000);
  setTimeout(() => {
    selectInputByDivScopeAutomationId(ethnicity, "ethnicityDropdown");
  }, 3000);

  selectRadioButtonByDataAutomationId("agreementCheckbox");
}

function selfIdentify(name, disabilityStatus) {
  enterValueByDataAutomationId("name", name);

  const todayDateNumber = new Date().getDate();
  const todayMonthNumber = new Date().getMonth() + 1;
  const todayYearNumber = new Date().getFullYear();
  console.log(todayDateNumber, todayMonthNumber, todayYearNumber);
  enterValueByDataAutomationId(
    "dateSectionMonth-input",
    addZeroToMonth(todayMonthNumber)
  );
  setTimeout(() => {}, 200);
  enterValueByDataAutomationId(
    "dateSectionDay-input",
    addZeroToDay(todayDateNumber)
  );
  setTimeout(() => {}, 300);
  enterValueByDataAutomationId("dateSectionYear-input", todayYearNumber);
  setTimeout(() => {}, 400);

  //

  // find label with inner text of "No, I Don't Have A Disability, Or A History/Record Of Having A Disability"

  const optionEl = document.evaluate(
    `//label[text()="${disabilityStatus}"]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  // get parent div
  const optionParentDiv = optionEl.parentElement;
  // get the first input in the div
  const optionInput = optionParentDiv.querySelector("input");
  // click the input
  optionInput.click();
  document.querySelector(".css-h8gl63").focus();
}

function addZeroToMonth(month) {
  if (month < 10) {
    return `0${month}`;
  }
  return month;
}
function addZeroToDay(day) {
  if (day < 10) {
    return `0${day}`;
  }
  return day;
}

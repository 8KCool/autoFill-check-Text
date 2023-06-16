function pressButtonByValue(value) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.innerText === value) {
      button.click();
    }
  });
}

function pressButtonByClassName(className) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.className === className) {
      button.click();
    }
  });
}

function enterValueByDataAutomationId(dataAutomationId, value) {
  const el = document.querySelector(
    `[data-automation-id="${dataAutomationId}"]`
  );

  el.focus();
  document.execCommand("insertText", false, value);
}

function enterValueByDataAutomationIdAndIteration(
  dataAutomationId,
  value,
  iteration
) {
  //     multiple elements with same dataAutomationId
  const els = document.querySelectorAll(
    `[data-automation-id="${dataAutomationId}"]`
  );
  const el = els[iteration];
  el.focus();
  document.execCommand("insertText", false, value);
}

function enterDateByIterationAndDataAutomationId(
  dataAutomationId,
  value,
  iteration
) {
  //     multiple elements with same dataAutomationId
  //     find the last element without a value and dataAutomationId
  const el = document.querySelectorAll(
    `[data-automation-id="${dataAutomationId}"]`
  )[iteration];

  el.focus();
  document.execCommand("insertText", false, value);
}

function pressButtonByAriaLabel(ariaLabel) {
  const el = document.querySelector(`[aria-label="${ariaLabel}"]`);
  el.click();
}

function selectRadioBtById(id) {
  const el = document.getElementById(id);
  el.click();
}

function selectRadioButtonByDataAutomationIdAndIteration(
  dataAutomationId,
  iteration
) {
  const els = document.querySelectorAll(
    `[data-automation-id="${dataAutomationId}"]`
  );
  const el = els[iteration];
  el.click();
}
function selectRadioButtonByDataAutomationId(dataAutomationId) {
  const el = document.querySelector(
    `[data-automation-id="${dataAutomationId}"]`
  );

  el.click();
}

function triggerAFocusEventByDataAutomationId(dataAutomationId) {
  const el = document.querySelector(
    `[data-automation-id="${dataAutomationId}"]`
  );

  //     focus
  el.dispatchEvent(
    new FocusEvent("focus", {
      isTrusted: true,
      bubbles: false,

      composed: true,
      button: 0,
      buttons: 1,
      isPrimary: true,
      pointerId: 1,
      detail: 0,
      which: 0,
    })
  );
}

function selectDropDownOptionByDataAutomationId(
  dataAutomationId,
  option,
  iteration
) {
  const els = document.querySelectorAll(
    `[data-automation-id="${dataAutomationId}"]`
  );

  //     click on the dropdown
  const el = els[iteration];
  el.click();

  //     get div with innerText === option using xpath

  const optionDiv = document.evaluate(
    `//div[text()="${option}"]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  optionDiv.click();
}

function selectDropDownOptionByArialLabel(ariaLabel, option) {
  const el = document.querySelector(`[aria-label="${ariaLabel}"]`);

  //   get div with innerText === option using xpath
  el.click();
  const optionDiv = document.evaluate(
    `//div[text()="${option}"]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  console.log(optionDiv);
  optionDiv.click();
}

function selectInputByDivScopeAutomationId(option, dataAutomationId) {
  //     click button with automation id 305a1163be7301b985577192b201c88a
  const el = document.querySelector(
    `[data-automation-id="${dataAutomationId}"]`
  );
  el.click();

  const optionDiv = document.evaluate(
    `//div[text()="${option}"]`,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  console.log(optionDiv);
  optionDiv.click();
}

function fillPhone(type, countryCode, number, extension) {

    enterValueByDataAutomationId("phone-number", number)

    const deviceTypeDropDown = document.querySelector("[data-automation-id='phone-device-type']");

    // Click the first element
    deviceTypeDropDown.click();


    // get all list tags which have a div with text value of "Mobile"
    const mobileList = document.querySelectorAll("li div");
    mobileList.forEach((li) => {
        if (li.innerText === type) {
            li.click();
        }

    })

}

// automation ids
// phone-number
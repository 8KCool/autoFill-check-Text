function fillEducationData(arrOfEducation) {

    for (let i = 0; i < arrOfEducation.length; i++) {
        setTimeout(() => {
            const education = arrOfEducation[i];
            enterValueByDataAutomationIdAndIteration("school", education.school, i);
            selectDropDownOptionByDataAutomationId("degree", education.degree, i);
            selectEducationScope(arrOfEducation[i].fieldOfStudy, i);
            enterValueByDataAutomationIdAndIteration("gpa", education.gpa, i);

            //     handle dates
            const els = document.querySelectorAll(`[data-automation-id^="education-"]`);
            const el = els[i];
            const startDateDiv = el.querySelector(`[data-automation-id="formField-startDate"]`);
            const startDateYearInput = startDateDiv.querySelector(`[aria-label="Year"]`);
            startDateYearInput.focus();
            document.execCommand('insertText', false, arrOfEducation[i].from)
            const endDateDiv = el.querySelector(`[data-automation-id="formField-endDate"]`);
            const endDateYearInput = endDateDiv.querySelector(`[aria-label="Year"]`);
            endDateYearInput.focus();
            document.execCommand('insertText', false, arrOfEducation[i].to)

        }, i * 1000);
        if (i !== arrOfEducation.length - 1) {

            pressButtonByAriaLabel("Add Another Education");
        }
    }

}


function selectEducationScope(field, i) {
    //    get element where place holder is "search"
    const els = document.querySelectorAll('input[placeholder="Search"]');


//
    const el = els[i];
    //     first do an onlick on the element to make sure it is in focus
    el.click();

    //    emulate a user typing in the input
    el.value = field
    //    trigger the value change event to trigger the search
    el.dispatchEvent(new Event("input", {bubbles: true}));
    // wait for 1 second

    //   el.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 13 }));
    //   //   press another enter after  5 seconds

    setTimeout(() => {
        //  get the focused element and press enter\
        el.dispatchEvent(
            new KeyboardEvent("keydown", {
                code: "Enter",
                keyCode: 13,
                bubbles: true,
                key: "Enter",
                composed: true,
            })
        );
        //  key up and press
        el.dispatchEvent(
            new KeyboardEvent("keyup", {
                code: "Enter",
                keyCode: 13,
                bubbles: true,
                key: "Enter",
                composed: true,
            })
        );

        el.dispatchEvent(
            new KeyboardEvent("keypress", {
                code: "Enter",
                keyCode: 13,
                bubbles: true,
                key: "Enter",
                composed: true,
            })
        );

    }, i * 1000);


}
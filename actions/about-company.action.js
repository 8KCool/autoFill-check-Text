function fillAboutCompany(howDidYouHear, employedInPast, Country) {
    //
    //    get element where place holder is "search"
    const el = document.querySelector('input[placeholder="Search"]');
    //     first do an onlick on the element to make sure it is in focus
    el.click();

    //    emulate a user typing in the input
    el.value = howDidYouHear;
    //    trigger the value change event to trigger the search
    el.dispatchEvent(new Event("input", {bubbles: true}));
    // wait for 1 second

    //   el.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 13 }));
    //   //   press another enter after  5 seconds
    const x = "css-whuet j";
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

    }, 200);

    if (employedInPast) {
        selectRadioBtById("1")

    } else {
        selectRadioBtById("2")
    }
    enterValueByDataAutomationId("countryDropdown", Country)

}
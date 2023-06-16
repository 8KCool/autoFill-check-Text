function fillSkills(arrOfSkills) {


//     get div by data automation id formField-skillsPrompt
    const skillsPromptDiv = document.querySelector(`[data-automation-id="formField-skillsPrompt"]`);

//     get the first input tag in the div
    const el = skillsPromptDiv.querySelector("input");


//     for each skill in arrOfSkills
    for (let i = 0; i < arrOfSkills.length; i++) {
//         enter the skill in the input
        setTimeout(() => {
                el.focus();
                document.execCommand('insertText', false, arrOfSkills[i]);
//         press enter
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
                console.log("skill entered", arrOfSkills[i], el)

            }
            , i * 1100);

    }
}

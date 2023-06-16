function fillWorkExperience(arrOfJobs) {
  // const job = arrOfJobs[0];
  // enterValueByDataAutomationId("jobTitle", job.title);
  // enterValueByDataAutomationId("company", job.company);
  // enterValueByDataAutomationId("location", job.location);
  //

  // enterValueByDataAutomationId("dateSectionMonth-input", job.from.split("/")[0]);
  // enterValueByDataAutomationId("dateSectionYear-input", job.from.split("/")[1]);
  // enterValueByDataAutomationId("dateSectionMonth-input", job.to.split("/")[0]);
  // if (job.currentlyWorkingHere) {
  //     selectRadioBtById("input-19");
  // }

  //     take the code above and make it support multiple jobs
  for (let i = 0; i < arrOfJobs.length; i++) {
    setTimeout(() => {
      pressButtonByClassName("add-button");
      const job = arrOfJobs[i];
      enterValueByDataAutomationIdAndIteration("jobTitle", job.title, i);
      enterValueByDataAutomationIdAndIteration("company", job.company, i);

      enterValueByDataAutomationIdAndIteration("location", job.location, i);
      if (job.currentlyWorkingHere) {
        selectRadioButtonByDataAutomationIdAndIteration("currentlyWorkHere", i);
      }
    }, 1000);
    if (i !== arrOfJobs.length - 1) {
      pressButtonByAriaLabel("Add Another Work Experience");
    }
  }

  for (let j = 0; j < arrOfJobs.length; j++) {
    setTimeout(() => {
      // find all divs where data-automation-id starts with workExperience
      const els = document.querySelectorAll(
        `[data-automation-id^="workExperience-"]`
      );

      const el = els[j];

      //     get the div with data-automation-id="formField-startDate"
      const startDateDiv = el.querySelector(
        `[data-automation-id="formField-startDate"]`
      );

      // get the input with aria-label Month
      const startDateMonthInput =
        startDateDiv.querySelector(`[aria-label="Month"]`);
      // get the input with aria-label Year
      const startDateYearInput =
        startDateDiv.querySelector(`[aria-label="Year"]`);

      // enter value
      startDateMonthInput.focus();
      document.execCommand(
        "insertText",
        false,
        arrOfJobs[j].from.split("/")[0]
      );
      startDateYearInput.focus();
      document.execCommand(
        "insertText",
        false,
        arrOfJobs[j].from.split("/")[1]
      );

      if (!arrOfJobs[j].currentlyWorkingHere) {
        const endDateDiv = el.querySelector(
          `[data-automation-id="formField-endDate"]`
        );
        const endDateMonthInput =
          endDateDiv.querySelector(`[aria-label="Month"]`);
        const endDateYearInput =
          endDateDiv.querySelector(`[aria-label="Year"]`);
        endDateMonthInput.focus();
        document.execCommand(
          "insertText",
          false,
          arrOfJobs[j].to.split("/")[0]
        );
        endDateYearInput.focus();
        document.execCommand(
          "insertText",
          false,
          arrOfJobs[j].to.split("/")[1]
        );
        //     end focus
        // if (j !== arrOfJobs.length - 1) {
        //   console.log("j", j);
        //   //   click in empty place to remove focus
        //   endDateMonthInput.focus();
        // }
      }
    }, 2000);
    //   after 3 seconds click on a random place to remove focus
    setTimeout(() => {
      //   get btton with id main and focus on it
      // const mainButton = document.getElementById("main");
      // mainButton.focus();
      //   GET DIV resumeUpload
      //   FOCUS ON BUTTON bottom-navigation-next-button DATA AUTOMATION ID
      //   bottom-navigation-next-button
      const nextButton = document.querySelector(
        `[data-automation-id="bottom-navigation-next-button"]`
      );
      nextButton.focus();
    }, 3200);
  }
}

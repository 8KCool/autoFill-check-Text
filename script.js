// https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced/job/San-Jose/Software-Development-Engineer_R137087-1/apply/applyManually

const autofillDataStruct = {
  channel: "Indeed",
  previouslyEmployed: false,
  country: "United States of America",
  personal: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    line1: "1234 Main St",
    line2: "Apt 123",
    city: "San Jose",
    state: "CA",
    postalCode: "95131",
  },
  emailAddress: {
    email: "test@gmail.com",
  },
  phone: {
    type: "Mobile",
    countryCode: "1",
    number: "4081234567",
    extension: "123",
  },
  workExperience: [
    {
      title: "Software Engineer",
      company: "Adobe",
      location: "San Jose, CA",
      currentlyWorkingHere: true,
      from: "2/2005",
      to: null,
      description: "Worked on the Adobe Experience Platform",
    },
    {
      title: "Freelancing",
      company: "UpWork",
      location: "San Jose, CA",
      currentlyWorkingHere: false,
      from: "2/2006",
      to: "3/2007",
      description: "Worked on the UpWork",
    },
  ],
  education: [
    {
      school: "San Jose State University",
      degree: "High School",
      fieldOfStudy: "Computer Engineering",
      gpa: "3.5",
      from: "2003",
      to: "2024",
      description: "Worked on the Adobe Experience Platform",
    },
    {
      school: "2San Jose State University",
      degree: "GED",
      fieldOfStudy: "Computer Engineering",
      gpa: "3.5",
      from: "2005",
      to: "2025",
      description: "Worked on the Adobe Experience Platform",
    },
  ],
  certificates: [
    {
      name: "AWS Certified Developer",
      number: "123456789",
      from: "2019-01-01",
      to: "2020-01-01",
    },
  ],
  skills: ["programming", "web dev"],
  resumePathLocal: "C:\\Users\\johndoe\\Desktop\\resume.pdf",
  linkedIn: "https://www.linkedin.com/in/johndoe/",
  canLegallyWork: "Yes",
  backgroundCheck: "No",
  verifyInformation: "Yes",
  daily: "Yes",
  visaRequired: "No",
  previouslyWorkedAs: "Employee",
  disclosures: {
    veteran: "I AM NOT A VETERAN",
    gender: "Male",
    ethnicity: "Asian (Not Hispanic or Latino) (United States of America)",
  },
  disabilityStatus:
    "No, I Don't Have A Disability, Or A History/Record Of Having A Disability",
  resumeUrl:
    "https://agamjotsinghjashan.s3.ca-central-1.amazonaws.com/TT-Agamjot+Singh+Jashan+.pdf",
};
window.onload = function () {
  addFuncBtTOUI();
};

function addFuncBtTOUI() {
  //     add a html button to the top of the page
  const button = document.createElement("button");
  button.innerHTML = "START DEMO";
  button.onclick = master;
  button.className = "btn btn-default btn-primary";
  button.id = "main";
  // cursor pointer

  button.style.cursor = "pointer";

  // make the button float over the right corner
  button.style.position = "fixed";
  button.style.top = "0px";
  button.style.left = "0px";
  button.style.zIndex = "9999";
  button.style.backgroundColor = "#007bff";
  button.style.color = "white";
  button.style.borderRadius = "0px 0px 10px 0px";
  button.style.padding = "10px";
  button.style.fontSize = "20px";
  button.style.fontWeight = "bold";
  button.style.border = "none";
  button.style.outline = "none";

  const body = document.getElementsByTagName("body")[0];
  body.prepend(button);

  // const button2 = document.createElement("button");
  // button2.innerHTML = "Add Value to Second Input";
  // button2.onclick = Step2Trigger;
  // button2.className = "btn btn-default btn-primary";
  // button2.id = "main2";
  // // cursor pointer
  // button2.style.cursor = "pointer";
  // const body2 = document.getElementsByTagName("body")[0];
  // body2.prepend(button2);
  //
  // const button3 = document.createElement("button");
  // button3.innerHTML = "Add Value to Third Input";
  // button3.onclick = Step3Trigger;
  // button3.className = "btn btn-default btn-primary";
  // button3.id = "main3";
  // // cursor pointer
  // button3.style.cursor = "pointer";
  // const body3 = document.getElementsByTagName("body")[0];
  // body3.prepend(button3);
  //
  // const button4 = document.createElement("button");
  // button4.innerHTML = "Add Value to Fourth Input";
  // button4.onclick = Step4Trigger;
  // button4.className = "btn btn-default btn-primary";
  // button4.id = "main4";
  // // cursor pointer
  // button4.style.cursor = "pointer";
  // const body4 = document.getElementsByTagName("body")[0];
  // body4.prepend(button4);
  //
  // const button5 = document.createElement("button");
  // button5.innerHTML = "Add Value to Fifth Input";
  // button5.onclick = Step5Trigger;
  // button5.className = "btn btn-default btn-primary";
  // button5.id = "main5";
  // // cursor pointer
  // button5.style.cursor = "pointer";
  // const body5 = document.getElementsByTagName("body")[0];
  // body5.prepend(button5);
}

async function main() {
  //    PAGE 1 - MY INFORMATION

  fillAboutCompany(
    autofillDataStruct.channel,
    autofillDataStruct.previouslyEmployed,
    autofillDataStruct.country
  );

  fillName(
    autofillDataStruct.personal.firstname,
    autofillDataStruct.personal.lastname
  );

  fillAddress(
    autofillDataStruct.address.line1,
    autofillDataStruct.address.line2,
    autofillDataStruct.address.city,
    autofillDataStruct.address.state,
    autofillDataStruct.address.postalCode
  );

  fillEmail(autofillDataStruct.emailAddress.email);

  fillPhone(
    autofillDataStruct.phone.type,
    autofillDataStruct.phone.countryCode,
    autofillDataStruct.phone.number,
    autofillDataStruct.phone.extension
  );

  //     press button after 1 second
  setTimeout(() => {
    pressButtonByClassName("css-h8gl63");
  }, 1000);
}

async function Step2Trigger() {
  // // PAGE 2 - MY WORK EXPERIENCE
  // setTimeout(() => {

  fillWorkExperience(autofillDataStruct.workExperience);
  fillEducationData(autofillDataStruct.education);

  // if (autofillDataStruct.certificates.length > 0) {
  //     fillCertificateData(autofillDataStruct.certificates)
  // }
  if (autofillDataStruct.skills.length > 0) {
    fillSkills(autofillDataStruct.skills);
  }
  setTimeout(() => {
    getResumeInput(autofillDataStruct.resumeUrl);
  }, 7000);

  if (autofillDataStruct.linkedIn.length > 0) {
    fillSocial(autofillDataStruct.linkedIn);
  }
  setTimeout(() => {
    pressButtonByClassName("css-h8gl63");
  }, 12000);
  // }, 2500)
}

async function Step3Trigger() {
  // PAGE 3 - MY SKILLS

  // setTimeout(() => {
  fillApplication(
    autofillDataStruct.canLegallyWork,
    autofillDataStruct.backgroundCheck,
    autofillDataStruct.verifyInformation,
    autofillDataStruct.daily,
    autofillDataStruct.visaRequired,
    autofillDataStruct.previouslyWorkedAs
  );
  setTimeout(() => {
    pressButtonByClassName("css-h8gl63");
  }, 5500);
  // }, 1000)
}

async function Step4Trigger() {
  // PAGE 4 - MY APPLICATION

  fillDisclosures(autofillDataStruct.disclosures);
  setTimeout(() => {
    pressButtonByClassName("css-h8gl63");
  }, 3500);
}

async function Step5Trigger() {
  selfIdentify(
    autofillDataStruct.personal.firstname,
    autofillDataStruct.disabilityStatus
  );
  setTimeout(() => {
    pressButtonByClassName("css-h8gl63");
  }, 500);
}

async function master() {
  //   combine all functions with respective timeouts

  await main();
  setTimeout(() => {
    Step2Trigger();
  }, 6000);
  setTimeout(() => {
    Step3Trigger();
  }, 20000);
  setTimeout(() => {
    Step4Trigger();
  }, 28000);
  setTimeout(() => {
    Step5Trigger();
  }, 35000);
}

async function getResumeInput(remoteResumeURL) {
  // pass file path to the input element
  const designFile = await createFile(remoteResumeURL);

  // find the file input element and trigger an upload
  const input = document.querySelector('input[type="file"]');
  const dt = new DataTransfer();
  dt.items.add(designFile);
  input.files = dt.files;

  const event = new Event("change", {
    bubbles: !0,
  });
  input.dispatchEvent(event);

  // el.focus();
  // el.click();
}
async function createFile(url) {
  let response = await fetch(url);
  let data = await response.blob();
  let metadata = {
    type: "image/jpeg",
  };
  return new File([data], "resume.pdf", metadata);
}

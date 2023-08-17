import axios from "axios";

export const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ2OWU1MjVEOWRlQzE5OUM4YTVCMDRDMkMxNmZiRTJENzk5MEJmMDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODcxODQ1MzA4ODcsIm5hbWUiOiJtYXRjaCJ9.UkMnxEj41AAdcOU-K09RZldQEKMCCvOl-jR6Nsdgrq0`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

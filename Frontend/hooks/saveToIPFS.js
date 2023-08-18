import axios from 'axios';

export const saveSongToIPFS = async (file) => {
  const formData = new FormData();

  if (file.type === 'audio/mpeg') {
    formData.append('file', file);
  } else {
    throw new Error('Invalid file type');
  }

  var config = {
    method: 'post',
    url: 'https://api.web3.storage/upload',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ2OWU1MjVEOWRlQzE5OUM4YTVCMDRDMkMxNmZiRTJENzk5MEJmMDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODcxODQ1MzA4ODcsIm5hbWUiOiJtYXRjaCJ9.UkMnxEj41AAdcOU-K09RZldQEKMCCvOl-jR6Nsdgrq0`,
      'Content-Type': 'text/plain',
    },
    data: formData,
  };

  const response = await axios(config);

  return response.data.cid;
};

export const saveProfileToIPFS = async (file) => {
  const formData = new FormData();

  if (file.type.includes('image')) {
    formData.append('file', file);
  } else {
    throw new Error('Invalid file type');
  }

  var config = {
    method: 'post',
    url: 'https://api.web3.storage/upload',
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ2OWU1MjVEOWRlQzE5OUM4YTVCMDRDMkMxNmZiRTJENzk5MEJmMDciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODcxODQ1MzA4ODcsIm5hbWUiOiJtYXRjaCJ9.UkMnxEj41AAdcOU-K09RZldQEKMCCvOl-jR6Nsdgrq0`,
      'Content-Type': 'text/plain',
    },
    data: formData,
  };

  const response = await axios(config);

  return response.data.cid;
};

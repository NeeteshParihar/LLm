function cleanLlmResponse(rawString) {
  let cleaned = rawString.replace(/\\n/g, '\n');
  cleaned = cleaned.replace(/\\"/g, '"');
  cleaned = cleaned.replace(/ /g, ' ');
  return cleaned;
}

export default cleanLlmResponse
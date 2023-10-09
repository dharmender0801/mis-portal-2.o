const encryptJsonData = async (jsonData: any, secretKey: any) => {
  const jsonString = JSON.stringify(jsonData);
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    "raw",
    secretKey,
    "AES-GCM",
    false,
    ["encrypt"]
  );
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(jsonString);
  const encryptedData = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    dataBuffer
  );
  const encryptedDataArray = Array.from(new Uint8Array(encryptedData));
  const ivArray = Array.from(iv);
  const encryptedDataString = btoa(String.fromCharCode(...encryptedDataArray));
  const ivString = btoa(String.fromCharCode(...ivArray));
  console.log(ivString);
  return { encryptedData: encryptedDataString, iv: ivString };
};

const decryptJsonData = async (
  encryptedDataString: any,
  ivString: any,
  secretKey: any
) => {
  const encryptedDataArray = new Uint8Array(
    atob(encryptedDataString)
      .split("")
      .map((char) => char.charCodeAt(0))
  );
  const ivArray = new Uint8Array(
    atob(ivString)
      .split("")
      .map((char) => char.charCodeAt(0))
  );
  const key = await crypto.subtle.importKey(
    "raw",
    secretKey,
    "AES-GCM",
    false,
    ["decrypt"]
  );
  const decryptedData = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivArray },
    key,
    encryptedDataArray
  );
  const decoder = new TextDecoder();
  const decryptedJsonString = decoder.decode(decryptedData);
  const decryptedDataObj = JSON.parse(decryptedJsonString);

  return decryptedDataObj;
};
const generateAesKey = async () => {
  return crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 128, // Key size in bits (change as needed)
    },
    true, // Whether the key is extractable
    ["encrypt", "decrypt"]
  );
};
const Encoder = {
  encryptJsonData,
  decryptJsonData,
  generateAesKey,
};
export default Encoder;

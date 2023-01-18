import { Web3Storage } from "web3.storage";

const web3storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVkQzMyMEYyNkY5M2I1N0Q3YUVCRTMxNkM1ODJhN0FCMDA3NWUwMzMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQwNTgwMTUyODcsIm5hbWUiOiJ0ZXN0In0.rs_lK9IyaZuexV9yMtB6xltRaixybzyuG1Sog3LHnMA";

function GetAccessToken() {
  return web3storage_key;
}

function MakeStorageClient() {
  return new Web3Storage({ token: GetAccessToken() });
}

export const StoreContent = async (files) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("Stored files with cid:", cid);
  return cid;
};

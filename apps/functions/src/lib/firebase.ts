// Import the functions you need from the SDKs you need

import { cert, initializeApp } from "firebase-admin/app";
import { GOOGLE_SA_CREDS_JSON } from "../config";
import { getFirestore } from "firebase-admin/firestore";


// Initialize Firebase
let app = null

if (GOOGLE_SA_CREDS_JSON) {
  // for local, read the secret from .env.local
  const parsedJson = JSON.parse(GOOGLE_SA_CREDS_JSON)

  app = initializeApp({
    credential: cert(parsedJson)
  })
} else {
  // on cloud, Applicaton Default Credentials are available in the env
  app = initializeApp()
}

export const firestore = getFirestore(app)

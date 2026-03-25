import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import { getRequestListener } from '@hono/node-server'
import backend from "./api/backend";
import { onSchedule } from "firebase-functions/scheduler";
import { generateNewChallenge } from "./curator/job";
import { defineSecret } from "firebase-functions/params";


setGlobalOptions({ maxInstances: 10 });

const geminiApiKey = defineSecret("GEMINI_API_KEY")
// const googleServiceAccountCredsJson = defineSecret("GOOGLE_SA_CREDS_JSON")

export const api = onRequest({
  region: 'asia-south1',
  cors: '*',
  secrets: []
}, getRequestListener(backend.fetch))

export const dailyNewChallenge = onSchedule({
  schedule: "0 0 * * *",
  timeZone: "Etc/GMT",
  region: "asia-south1",
  secrets: [
    geminiApiKey,
    // googleServiceAccountCredsJson
  ]
}, generateNewChallenge)

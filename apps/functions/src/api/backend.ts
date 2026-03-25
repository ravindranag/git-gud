import { Hono } from "hono"
import { ChallengeService } from "../domain/challenge"


const backend = new Hono()

backend.get("/api/challenges", async (c) => {
  return c.json({
    challenges: "Git Gud!"
  })
})

backend.get("/api/challenges/today", async (c) => {
  const challengeForToday = await ChallengeService.getChallengeForToday()

  return c.json({
    challenge: challengeForToday
  })
})

export default backend

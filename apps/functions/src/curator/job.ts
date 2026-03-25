import { getModelResponse } from "./llm/model"
import { ChallengeService } from "../domain/challenge"


export const generateNewChallenge = async () => {
  const userInput = "Give me a challenge"

  const previousChallenges = await ChallengeService.getPreviousChallenges(30)
  const previousChallengeStatements = previousChallenges.map((c) => c.challenge)

  const challenge = await getModelResponse(userInput, previousChallengeStatements)

  if (!challenge) {
    return
  }

  await ChallengeService.createChallenge({
    ...challenge,
    createdAt: new Date()
  })
}

import { generateNewChallenge } from "./job";

async function main() {
  console.log('generating challenge')
  await generateNewChallenge()
  console.log('done')
}

main()
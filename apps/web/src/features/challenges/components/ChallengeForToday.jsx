import RenderChallenge from "@/features/challenges/components/RenderChallenge"
import { useChallengeForToday } from "@/features/challenges/hooks/useChallengeForToday"
import { css } from "@/styled-system/css"
import { hstack, vstack } from "@/styled-system/patterns"
import Card from "@/ui/Card"

const ChallengeForToday = () => {
  const { challenge, isLoading } = useChallengeForToday()

  const localToday = new Date().toLocaleDateString()

  return (
    <div className={vstack({gap: 0, alignItems: 'start', bg: 'stone.200'})}>
      <Card variant="outlined" borderBottom="none" borderTop="none" className={hstack()}>
        <h1 className={css({alignSelf: 'center', flexGrow: 1})}>Today's frontend challenge</h1>
        <p className={css({fontSize: 'sm', color: 'neutral.500'})}>{localToday}</p>
      </Card>
      {isLoading && (
        <Card variant="outlined">
          <p>Loading...</p>
        </Card>
      )}
      {challenge && <RenderChallenge challenge={challenge} />}
    </div>
  )
}

export default ChallengeForToday

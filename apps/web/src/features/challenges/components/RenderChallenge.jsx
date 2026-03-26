import { css } from "@/styled-system/css"
import { vstack } from "@/styled-system/patterns"
import Card from "@/ui/Card"
import Markdown from 'react-markdown'

const subTitleStyle = css.raw({
  textTransform: 'uppercase',
  fontSize: 'sm',
  letterSpacing: 'subTitle',
  color: 'neutral.500'
})

const RenderStringField = ({title, value}) => {
  return (
    <div className={vstack({gap: 0, alignItems: 'start'})}>
      {title && <p className={css([subTitleStyle])}>{title}</p>}
      <Markdown>{value}</Markdown>
    </div>
  )
}

const RenderArrayField = ({title, values}) => {
  return (
    <div className={vstack({gap: 4, alignItems: 'start'})}>
      <p className={css([subTitleStyle])}>{title}</p>
      <div className={vstack({gap: 1, alignItems: 'start'})}>
        {values?.map((text, idx) => (
          <Markdown key={`${title}-${idx}`}>{text}</Markdown>
        ))}
      </div>
    </div>
  )
}

/**
 * @typedef RenderChallengeProps
 * @property {Challenge} challenge
 * 
 */

/**
 * 
 * @type {import("react").FC<RenderChallengeProps>}
 */
const RenderChallenge = ({challenge}) => {
  return (
    <div className={vstack({ gap: 0, alignItems: 'flex-start', textWrap: 'pretty' })}>
      <Card variant="outlined" className={vstack({alignItems: 'start', gap: 4, borderBottom: 'none'})}>
        <h2 className={css({textAlign: 'start', fontSize: '3xl'})}>{challenge.title}</h2>
        <RenderStringField title="Difficulty" value={challenge.difficulty} />
        <RenderStringField title="Challenge" value={challenge.challenge} />
      </Card>
      <Card variant="outlined" borderBottom="none">
        <RenderArrayField title="Requirements" values={challenge.requirements} />
      </Card>
      <Card variant="outlined" borderBottom="none">
        <RenderArrayField title="Bonus Considerations" values={challenge.bonusConsiderations} />
      </Card>
      <Card variant="outlined" borderBottom="none">
        <RenderArrayField title="Why take this challenge?" values={challenge.whyTakeThisChallenge} />
      </Card>
    </div>
  )
}

export default RenderChallenge
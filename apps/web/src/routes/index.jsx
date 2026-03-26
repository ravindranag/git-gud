import ChallengeForToday from '@/features/challenges/components/ChallengeForToday'
import { container } from '@/styled-system/patterns'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={container({maxWidth: '2xl', paddingInline: 0 })}>
    <ChallengeForToday />
  </div>
}

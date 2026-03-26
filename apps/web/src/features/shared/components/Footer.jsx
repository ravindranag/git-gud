import { css } from "@/styled-system/css"
import { vstack } from "@/styled-system/patterns"
import Card from "@/ui/Card"
import StyledLink from "@/ui/StyledLink"



const Footer = () => {
  return (
    <footer className={css({bg: 'stone.200'})}>
      <Card variant="outlined" className={vstack({ gap: 6, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 })}>
        <p className={css({fontSize: 'sm', color: 'neutral.900', fontWeight: 'semibold'})}>Keep your skills, one challenge a day.</p>
        <StyledLink to="https://github.com/ravindranag/git-gud" target="_blank">github</StyledLink>
      </Card>
    </footer>
  )
}

export default Footer

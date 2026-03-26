import { css } from "@/styled-system/css"
import { vstack } from "@/styled-system/patterns"
import Card from "@/ui/Card"

const Header = () => {
  return (
    <header className={css({bg: 'stone.200', position: 'sticky', top: 0, zIndex: 'appBar'})}>
      <Card variant="outlined" className={vstack({justifyContent: 'center'})}>

      <span className={css({fontWeight: 800, fontSize: 'large'})}>Git Gud</span>
      </Card>
    </header>
  )
}

export default Header

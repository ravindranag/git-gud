import { styled } from "@/styled-system/jsx";

const Card = styled('div', {
  base: {
    borderRadius: 8,
    bg: 'stone.50',
    p: '4',
    width: 'full',

  },
  variants: {
    variant: {
      outlined: {
        bg: 'stone.50',
        border: '1px solid',
        borderColor: 'stone.200',
      }
    }
  },

})

export default Card

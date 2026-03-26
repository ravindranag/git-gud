import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import { Link } from "@tanstack/react-router";

const link = cva({
base: {
    fontSize: 'sm',
    color: 'neutral.600',
    _hover: {
      color: 'neutral.900'
    }
  }
})

const StyledLink = styled(Link, link)

export default StyledLink

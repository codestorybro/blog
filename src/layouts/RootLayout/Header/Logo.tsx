import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import Image from "next/image"
import useScheme from "src/hooks/useScheme"

const Logo = () => {
  const [scheme, setScheme] = useScheme()

  return (
    <Link href="/" aria-label={CONFIG.profile.name}>
      <StyledLogo
        src={scheme === "light" ? CONFIG.darkLogo : CONFIG.lightLogo}
        width={60}
        height={40}
        alt=""
      />
    </Link>
  )
}

export default Logo

const StyledLogo = styled(Image)`
  display: inline-block;
  vertical-align: middle;
`

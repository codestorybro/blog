import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"

type Props = {}

const Error500: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="top">
          <div>5</div>
          <Emoji>🤬</Emoji>
          <div>0</div>
        </div>
        <div className="text">Internal server error</div>
      </div>
    </StyledWrapper>
  )
}

export default Error500

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 1.5rem;
  max-width: 68rem;
  .wrapper {
    display: flex;
    padding-top: 5rem;
    padding-bottom: 5rem;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    > .top {
      display: flex;
      align-items: center;
      font-size: 3.75rem;
      line-height: 1;
    }
    > .text {
      font-size: 1.875rem;
      line-height: 2.25rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`

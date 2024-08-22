import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"

type Props = {}

const Footer: React.FC<Props> = () => {
  const [topButtonVisible, setTopButtonVisible] = useState(false)

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
      setTopButtonVisible(true)
    else setTopButtonVisible(false)
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction()
    }
  }, [])

  return (
    <StyledWrapper style={topButtonVisible ? { opacity: 1 } : {}}>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={topButtonVisible ? {} : { cursor: "default" }}
      >
        ⬆️
      </a>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 5%;
  right: 5%;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray10};
  opacity: 0;
  -webkit-transition: opacity 0.15s ease-in-out;
  -moz-transition: opacity 0.15s ease-in-out;
  -ms-transition: opacity 0.15s ease-in-out;
  -o-transition: opacity 0.15s ease-in-out;
  transition: opacity 0.15s ease-in-out;

  a {
    margin-top: 0.5rem;
    background-color: #238636;
    padding: 8px 11px;
    border-radius: 100%;
    color: #fff;

    -webkit-transition: background-color 150ms;
    -moz-transition: background-color 150ms;
    -ms-transition: background-color 150ms;
    -o-transition: background-color 150ms;
    transition: background-color 150ms;

    :hover {
      background-color: #185422;
      color: ${({ theme }) => theme.colors.gray12};
    }
  }

  @media (min-width: 1048px) {
    margin-right: -450px;
    right: 50%;
  }
`

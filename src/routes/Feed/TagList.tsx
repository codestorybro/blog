import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className="list">
        {Object.keys(data).map((key) => (
          <span
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
          >
            {key}
          </span>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  .top {
    display: block;
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    span {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray11};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.blue9};
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }
  }
`

import styled from "@emotion/styled"
import React, { InputHTMLAttributes, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import { Emoji } from "src/components/Emoji"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: number
}

const isValidEmail = (email: string) => {
  const pattern = /\S+@\S+\.\S+/
  return pattern.test(email)
}

const CONVERTKIT_API = "/api/subscribe-convertkit"

const SubscribeInput: React.FC<Props> = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<{ email: string }>()

  const onSubmit: SubmitHandler<{ email: string }> = ({
    email,
  }: {
    email: string
  }) => {
    if (!email) {
      return toast.error("Email is empty")
    }

    if (!isValidEmail(email)) {
      return toast.error("Email is not valid")
    }

    setIsLoading(true)

    const res = fetch(CONVERTKIT_API, {
      method: "POST",
      body: JSON.stringify({ email }),
    })

    toast.promise(
      res,
      {
        loading: "Loading ...",
        success: (data) => {
          if (!data.ok) throw new Error(`${data.status} — ${data.statusText}`)
          reset()
          return "Check your email to confirm your subscription"
        },
        error: (err) => err.message,
      },
      { success: { duration: 4000 }, error: { duration: 4000 } }
    )

    res.finally(() => setIsLoading(false))
  }

  return (
    <div style={props.maxWidth ? { display: "table", margin: "0 auto" } : {}}>
      <StyledLabel>
        <Emoji>💌</Emoji> Stay ahead in React and <b>subscribe</b> to
        newsletter!
      </StyledLabel>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        style={props.maxWidth ? { maxWidth: props.maxWidth } : {}}
      >
        <input
          {...register("email")}
          className="mid"
          type="text"
          placeholder="Enter your email..."
          autoComplete="off"
          name="email"
          id="email"
          {...props}
        />
        <button type="submit" disabled={isLoading}>
          Subscribe
        </button>
      </StyledForm>
    </div>
  )
}

export default SubscribeInput

const StyledLabel = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledForm = styled.form`
  margin-bottom: 2rem;

  > input {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray5};
  }

  > button {
    margin: 8px 0;
    background-color: #238636;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 16px;
    color: #fff;
    -webkit-transition: background-color 150ms;
    -ms-transition: background-color 150ms;
    transition: background-color 150ms;

    :disabled {
      background-color: #105823;
      color: #ffffff66;
      cursor: not-allowed;

      :hover {
        background-color: #105823;
      }
    }

    :hover {
      background-color: #185422;
    }
  }

  @media (max-width: 389px) {
    > button {
      float: right;
    }
  }

  @media (min-width: 390px) {
    display: flex;

    > button {
      margin: 0 0 0 8px;
    }
  }
`

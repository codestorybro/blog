const subscribeConvertkit = async (
  req: { body: string },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { error: any }): any; new (): any }
    }
  }
) => {
  const { email } = JSON.parse(req.body)

  try {
    const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID
    const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        body: JSON.stringify({ email, api_key: API_KEY }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      }
    )

    // something went wrong on the convertkit server
    if (response.status >= 400) {
      return res
        .status(400)
        .json({ error: "There was an error subscribing to the list." })
    }

    // Success
    return res.status(201).json({ error: null })
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" })
  }
}

export default subscribeConvertkit

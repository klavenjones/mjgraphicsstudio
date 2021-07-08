export const fetchGet = async (url) => {
  try {
    const data = await fetch(url).then((res) => res.json())
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const fetchPost = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data || {})
    })
    return response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

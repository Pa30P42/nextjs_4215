import {getSession} from 'next-auth/react'

const handler = async (req: any, res: any) => {
  const session = await getSession({req})
  if (!session) {
    res.status(401).json({error: 'Unauthenticated'})
  } else {
    res.status(200).json({message: 'Success'})
  }
  res.status()
}
export default handler

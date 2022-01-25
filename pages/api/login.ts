import { checkUserPassword } from '@/services/user'

function loginHandler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    console.log(data)
    res.status(200).json({ res: true })
  }
}

export default loginHandler

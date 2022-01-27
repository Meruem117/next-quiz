import { checkUserPassword } from '@/services/user'

async function loginHandler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await checkUserPassword(data)
    res.status(200).json({ data: response.data })
  }
}

export default loginHandler

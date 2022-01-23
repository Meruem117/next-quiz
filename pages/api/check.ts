import { checkUserPassword } from '@/services/user'

function checkHandler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    console.log(data)
    res.status(201).json({ message: 'success' })
  }
}

export default checkHandler

import type { postRequestItem, passRequestItem } from '@/models/base'
import { passMember } from '@/services/member'

async function passHandler(req: postRequestItem<passRequestItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await passMember(data)
    res.status(200).json(response)
  }
}

export default passHandler

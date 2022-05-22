import type { postRequestItem } from '@/models/base'
import type { userRegisterItem } from '@/models/user'
import { addUser } from '@/services/user'

async function registerHandler(req: postRequestItem<userRegisterItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await addUser(data)
    res.status(200).json(response)
  }
}

export default registerHandler

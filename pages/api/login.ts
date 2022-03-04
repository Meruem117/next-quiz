import type { postRequestItem } from '@/models/base'
import type { userLoginItem } from '@/models/user'
import { checkUserPassword } from '@/services/user'

async function loginHandler(req: postRequestItem<userLoginItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await checkUserPassword(data)
    res.status(200).json(response.data)
  }
}

export default loginHandler

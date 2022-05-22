import type { postRequestItem } from '@/models/base'
import type { memberQuitItem } from '@/models/member'
import { quitMember } from '@/services/member'

async function quitHandler(req: postRequestItem<memberQuitItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await quitMember(data)
    res.status(200).json(response)
  }
}

export default quitHandler

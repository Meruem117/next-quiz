import type { postRequestItem } from '@/models/base'
import type { memberItem } from '@/models/member'
import { addMember } from '@/services/member'

async function applyHandler(req: postRequestItem<memberItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await addMember(data)
    res.status(200).json(response)
  }
}

export default applyHandler

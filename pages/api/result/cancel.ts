import type { deleteRequestItem, postRequestItem } from '@/models/base'
import { cancelResult } from '@/services/result'

async function cancelHandler(req: postRequestItem<deleteRequestItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await cancelResult(data)
    res.status(200).json(response)
  }
}

export default cancelHandler

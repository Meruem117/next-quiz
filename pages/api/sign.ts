import type { postRequestItem } from '@/models/base'
import type { resultItem } from '@/models/result'
import { addResult } from '@/services/result'

async function signHandler(req: postRequestItem<resultItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await addResult(data)
    res.status(200).json(response)
  }
}

export default signHandler

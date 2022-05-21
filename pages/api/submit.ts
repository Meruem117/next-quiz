import type { postRequestItem } from '@/models/base'
import type { resultItem } from '@/models/result'
import { submitResult } from '@/services/result'

async function submitHandler(req: postRequestItem<resultItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await submitResult(data)
    res.status(200).json(response)
  }
}

export default submitHandler

import type { postRequestItem } from '@/models/base'
import type { disableItem } from '@/models/question'
import { disableQuestion } from '@/services/question'

async function disableHandler(req: postRequestItem<disableItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await disableQuestion(data)
    res.status(200).json(response)
  }
}

export default disableHandler

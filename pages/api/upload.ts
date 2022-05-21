import type { postRequestItem } from '@/models/base'
import type { questionItem } from '@/models/question'
import { uploadQuestion } from '@/services/question'

async function uploadHandler(req: postRequestItem<questionItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await uploadQuestion(data)
    res.status(200).json(response)
  }
}

export default uploadHandler

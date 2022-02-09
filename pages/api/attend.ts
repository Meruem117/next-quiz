import type { requestItem } from '@/models/base'
import type { attendItem } from '@/models/result'
import { getAttendResult } from '@/services/result'

async function attendHandler(req: requestItem<attendItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await getAttendResult(data)
    res.status(200).json({ ...response.data })
  }
}

export default attendHandler

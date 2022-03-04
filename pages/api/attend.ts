import type { getRequestItem } from '@/models/base'
import { getResultWhenAttend } from '@/services/result'

async function attendHandler(req: getRequestItem<{ scheduleId: number, participantId: number, isTeam: number }>, res: any) {
  if (req.method === 'GET') {
    const { scheduleId, participantId, isTeam } = req.query
    const response = await getResultWhenAttend(scheduleId, participantId, isTeam)
    if (response.data) {
      res.status(200).json(response.data)
    } else {
      res.status(200).json(false)
    }
  }
}

export default attendHandler

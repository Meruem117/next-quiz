import type { getRequestItem } from '@/models/base'
import { getTeamListByLeaderId } from '@/services/team'

async function teamHandler(req: getRequestItem<{ id: number }>, res: any) {
  if (req.method === 'GET') {
    const leaderId = req.query.id
    const response = await getTeamListByLeaderId(leaderId)
    res.status(200).json(response.data)
  }
}

export default teamHandler

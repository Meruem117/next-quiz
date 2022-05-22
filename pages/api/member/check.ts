import type { getRequestItem } from '@/models/base'
import { checkMembership } from '@/services/member'

async function checkHandler(req: getRequestItem<{ teamId: number, userId: number }>, res: any) {
  if (req.method === 'GET') {
    const { teamId, userId } = req.query
    const response = await checkMembership(teamId, userId)
    res.status(200).json(response)
  }
}

export default checkHandler

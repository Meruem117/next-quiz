import type { postRequestItem } from '@/models/base'
import type { teamItem } from '@/models/team'
import { createTeam } from '@/services/team'

async function createHandler(req: postRequestItem<teamItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await createTeam(data)
    res.status(200).json(response)
  }
}

export default createHandler

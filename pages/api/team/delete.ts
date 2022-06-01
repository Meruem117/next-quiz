import type { deleteRequestItem, postRequestItem } from '@/models/base'
import { deleteTeam } from '@/services/team'

async function deleteHandler(req: postRequestItem<deleteRequestItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await deleteTeam(data)
    res.status(200).json(response)
  }
}

export default deleteHandler

import type { postRequestItem, deleteRequestItem } from '@/models/base'
import { dismissMembersByTeamId } from '@/services/member'

async function dismissHandler(req: postRequestItem<deleteRequestItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await dismissMembersByTeamId(data)
    res.status(200).json(response)
  }
}

export default dismissHandler

import type { postRequestItem, deleteRequestItem } from '@/models/base'
import { deleteMember } from '@/services/member'

async function deleteMemberHandler(req: postRequestItem<deleteRequestItem>, res: any) {
  if (req.method === 'POST') {
    const data = req.body
    const response = await deleteMember(data)
    res.status(200).json(response)
  }
}

export default deleteMemberHandler

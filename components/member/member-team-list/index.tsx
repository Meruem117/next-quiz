import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { List, Card, Typography } from 'antd'
import TeamCreateModal from '@/components/team/team-create-modal'
import type { memberItem } from '@/models/member'

const MemberTeamList: React.FC<{ data: memberItem[] }> = ({ data }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showModal = (): void => {
    setVisible(true)
  }

  const closeModal = (): void => {
    setVisible(false)
  }

  return (
    <Fragment>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        footer={
          <Typography.Link onClick={showModal}>Create your team.</Typography.Link>
        }
        renderItem={item => (
          <List.Item>
            <Link href={`/team/${item.teamId}`} passHref>
              <Card title={item.teamName} className="cursor-pointer rounded-md shadow hover:shadow-xl duration-150">
                <Typography.Text type="secondary">Joined at</Typography.Text> {item.joinTime}
              </Card>
            </Link>
          </List.Item>
        )}
      />
      <TeamCreateModal visible={visible} closeModal={closeModal} />
    </Fragment>
  )
}

export default MemberTeamList

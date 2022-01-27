import React from 'react'
import { Modal } from 'antd'

type eventType = (e: React.MouseEvent<HTMLElement, MouseEvent>) => void

const UserRegist: React.FC<{ visible: boolean, closeModal: eventType, changeModal: eventType }> = ({ visible, closeModal, changeModal }) => {
  return (
    <Modal title="Regist" visible={visible} onOk={changeModal} onCancel={closeModal}>
      <div>regist table</div>
    </Modal>
  )
}

export default UserRegist

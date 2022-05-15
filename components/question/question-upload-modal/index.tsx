import React from 'react'
import { Modal, Form } from 'antd'

const QuestionUploadModal: React.FC<{ visible: boolean, closeModal: VoidFunction }> = ({ visible, closeModal }) => {
  return (
    <Modal title="Upload Question" visible={visible} onCancel={closeModal}>
    </Modal>
  )
}

export default QuestionUploadModal
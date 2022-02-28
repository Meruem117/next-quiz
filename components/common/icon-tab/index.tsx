import React, { ReactElement } from 'react'

const IconTab = ({ icon, text }: { icon: React.FC, text: string | number }): ReactElement => (
  <span>
    {React.createElement(icon)}
    {text}
  </span>
)

export default IconTab

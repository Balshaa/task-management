import { Select } from '@mantine/core'
import React from 'react'

const ProjectTask = () => {
  return (
    <div>

      <Select
      label="Select Worker"
      placeholder="Select Worker"
      data={['Abebe', 'Sami', 'Balsha', 'Sola']}
    />
    <Select
      label="Select Task"
      placeholder="Select Task"
      data={['Designig', 'Coding', 'Form Making', 'API']}
    />
    </div>
  )
}

export default ProjectTask

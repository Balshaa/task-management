import { BarChart } from '@mantine/charts'
import { data } from './UserData';

const UserChart = () => {

  return (
    <div>
       <BarChart
       withLegend
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Front_End', color: 'violet.6' },
        { name: 'Back_End', color: 'blue.6' },
        { name: 'Tester', color: 'teal.6' },
      ]}
   
      
         
      />
    </div>
  )
}

export default UserChart

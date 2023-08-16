import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/FeaturedInfo'
import Chart from '../../components/Chart'
import WidgetsSmall from './../../components/WidgetsSmall';
import WidgetsLarge from '../../components/WidgetsLarge';
const data = [
    {
      name: 'Jan',
      sales: 4000,
      revenue: 2400,
      cost: 2400,
    },
    {
      name: 'Feb',
      sales: 3000,
      revenue: 1398,
      cost: 2210,
    },
    {
      name: 'Mar',
      sales: 2000,
      revenue: 9800,
      cost: 2290,
    },
    {
      name: 'Apr',
      sales: 2780,
      revenue: 3908,
      cost: 2000,
    },
    {
      name: 'May',
      sales: 1890,
      revenue: 4800,
      cost: 2181,
    },
    {
      name: 'Jun',
      sales: 2390,
      revenue: 3800,
      cost: 2500,
    },
    {
      name: 'Jul',
      sales: 3490,
      revenue: 4300,
      cost: 2100,
    },
    {
        name: 'Aug',
        sales: 3490,
        revenue: 4300,
        cost: 2100,
      },
      {
        name: 'Sep',
        sales: 3490,
        revenue: 4300,
        cost: 2100,
      },
      {
        name: 'Oct',
        sales: 3490,
        revenue: 4300,
        cost: 2100,
      },
      {
        name: 'Nov',
        sales: 3490,
        revenue: 4300,
        cost: 2100,
      },
      {
        name: 'Dec',
        sales: 3490,
        revenue: 4300,
        cost: 2100,
      },
  ];

const Home = () => {
    const dataKey1='sales'
    const color1='teal'
    const title1='Sales Analytics'
  return (
    <div>
        <FeaturedInfo/>
        <Chart data={data} dataKey={dataKey1} color={color1} title={title1}/>
        <div className="home-widgets">
            <WidgetsSmall/>
            <WidgetsLarge/>
        </div>
    </div>
  )
}

export default Home
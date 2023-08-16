import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './FeaturedInfo.css'
import Chart from './Chart';
const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">Revenue</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs.1500</span>
                <span className="featured-money-rate">-10%<ArrowDownwardIcon className='featured-icon'/></span>
            </div>
            <span className="featured-sub">Compared to last month</span>
            
        </div>
        <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs.2000</span>
                <span className="featured-money-rate">-5%<ArrowDownwardIcon className='featured-icon negative'/></span>
            </div>
            <span className="featured-sub">Compared to last month</span>
            
        </div>
        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className="featured-money">Rs.3500</span>
                <span className="featured-money-rate">+2%<ArrowUpwardIcon className='featured-icon'/></span>
            </div>
            <span className="featured-sub">Compared to last month</span>
            
        </div>
    </div>
  )
}

export default FeaturedInfo
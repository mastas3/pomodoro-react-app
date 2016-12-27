import React from 'react'
import ClockContainer from '../containers/ClockContainer'
import Header from './Header'

const Layout = () => 
      <div id='Layout' className='pure-g'>
      	<div className='pure-u-1-3'></div>
      	<div className='pure-u-1-3' style={{marginTop: '200px'}}>
      		<Header />
      		<ClockContainer/>
      	</div>
      	<div className='pure-u-1-3'></div>

      </div>

export default Layout;
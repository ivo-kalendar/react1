import React from 'react'
import ApprovalCard from './ApprovalCard'
import Profile from './Profile'

const Main = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard> <Profile time="6:20AM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="2:35PM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="4:40AM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="8:05PM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="6:20AM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="2:35PM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="4:40AM" /> </ApprovalCard>
			<ApprovalCard> <Profile time="8:05PM" /> </ApprovalCard>
			<ApprovalCard>
				<div>
					<h3>Warning!</h3>
					<p>Are you sure you want to do this?</p>
				</div>
			</ApprovalCard>
		</div>
	)
}

export default Main
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h3>Warning!</h3>
					<p>Are you sure you want to do this?</p>
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeOfPost="6:00PM" 
					content="Nice blog post!" 
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeOfPost="2:35PM" 
					content="Some ather blog post!" 
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeOfPost="4:40AM" 
					content="And even another blog post!" 
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
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
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeOfPost="6:00PM" 
					content="Nice blog post!" 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeOfPost="2:35PM" 
					content={faker.lorem.words()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()}
					author={faker.name.firstName()}
					timeOfPost="4:40AM" 
					content={faker.lorem.words()}
				/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
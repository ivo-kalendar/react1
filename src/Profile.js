import React from 'react'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const Profile = props => {
	return (
		<CommentDetail 
			avatar={faker.image.avatar()}
			author={faker.name.firstName()}
			time={props.time}
			content={faker.lorem.words()}
		/>
	)
}

export default Profile
/**
 * Created by michael on 27/11/2016.
 */
export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function vote(numOfVote, subjectId, commentId) {
	return {
		type: 'VOTE',
		numOfVote,subjectId,commentId
	};
}

export function markCorrect(subjectId, commentId) {
	return {
		type: 'MARK_CORRECT',
		subjectId,commentId
	};
}

export function addAnswer(subjectId, message) {
	return {
		type: 'ADD_ANSWER',
		subjectId,message
	};
}

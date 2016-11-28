/**
 * Created by michael on 27/11/2016.
 */
import storage from './storage/storage';
import {fromJS} from 'immutable';

var INITIAL_STATE = storage;

function setState(state, newState) {
	return state.merge(newState);
}

function vote(state, numOfVote, subjectId, commentId) {

	if(typeof commentId !== "undefined"){
		return state.updateIn(['subjects', subjectId, 'comments', commentId, 'votes'], value => value + numOfVote);
	}
	return state.updateIn(['subjects', subjectId, 'votes'], value => value + numOfVote);
}

function markCorrect(state, subjectId, commentId) {
	return state
		.setIn(['subjects', subjectId, 'comments', commentId, 'isRightAnswer'], true)
		.setIn(['subjects', subjectId,'isSolved'], true)
		.setIn(['subjects', subjectId,'modifiedDate'], new Date());
}

function generateUserName() {
	return "user_"+ Math.floor(Math.random() * 999);
}

function addAnswer(state, subjectId,message) {
	const comment = {
		description:message,
		name: generateUserName(),
		votes: 0,
		modifiedDate: new Date(),
		replies:[],
		isRightAnswer : false
	};

	return state
		.updateIn(['subjects', subjectId, 'comments'], value => value.push(fromJS(comment)))
		.updateIn(['subjects', subjectId, 'numberOfComments'], value => value+1)
		.setIn(['subjects', subjectId,'modifiedDate'], new Date());
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_STATE':
			return (setState(state, action.state));
		case 'VOTE':
			return vote(state, action.numOfVote,action.subjectId,action.commentId);
		case 'MARK_CORRECT':
			return markCorrect(state, action.subjectId,action.commentId);
		case 'ADD_ANSWER':
			return addAnswer(state, action.subjectId,action.message);
		default:
			return state;
	}
}
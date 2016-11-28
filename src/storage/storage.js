/**
 * Created by michael on 28/11/2016.
 */
import {fromJS} from 'immutable';

const storage = {
	subjects:{
		0: {
			subject: "What is the difference between using constructor vs getInitialState in React / React Native?",
			description: 'Lorem ipsum dolor sit amet, eos alii admodum erroribus at, vix cu tempor partiendo philosophia. Autem vocent in eum, inani adolescens ullamcorper eos in. Vim id oratio adipisci nominati, malis delectus mediocritatem in vel. Iisque atomorum nec id, te cibo soleat urbanitas mea. Est ei inani iracundia. Unum lobortis in sea.',
			name: 'user_000',
			votes: 78,
			numberOfComments: 2,
			modifiedDate: new Date('11/23/2016'),
			isSolved:false,
			comments: [
				{
					description: 'The two approaches are not interchangeable. You should initialize state in the constructor when using ES6 classes, and define the getInitialState method when using React.createClass.',
					name: 'user_111',
					votes: 2,
					modifiedDate: new Date(),
					replies:[],
					isRightAnswer : false
				},
				{
					description: 'Lorem ipsum dolor sit amet, eos alii admodum erroribus at, vix cu tempor partiendo philosophia. Autem vocent in eum, inani adolescens ullamcorper eos in. Vim id oratio adipisci nominati, malis delectus mediocritatem in vel. Iisque atomorum nec id, te cibo soleat urbanitas mea. Est ei inani iracundia. Unum lobortis in sea.',
					name: 'user_112',
					votes: 2,
					modifiedDate: new Date(),
					replies:[
						{
							description: "reply to comment 2",
							name: "user_113",
							modifiedDate: new Date(),
						}
					],
					isRightAnswer : false
				}
			]
		},

		1 : {
			subject: "subject 1",

			description: 'Lorem ipsum dolor sit amet, eos alii admodum erroribus at, vix cu tempor partiendo philosophia. Autem vocent in eum, inani adolescens ullamcorper eos in. Vim id oratio adipisci nominati, malis delectus mediocritatem in vel. Iisque atomorum nec id, te cibo soleat urbanitas mea. Est ei inani iracundia. Unum lobortis in sea.',
			name : 'user_2222',
			votes: 66,
			numberOfComments: 2,
			modifiedDate: new Date('11/24/2016'),
			isSolved:true,
			comments: [
				{
					description: "comment 1",
					name: 'user_221',
					votes: 2,
					modifiedDate: new Date(),
					replies:[],
					isRightAnswer : false
				},
				{
					description: 'Lorem ipsum dolor sit amet, eos alii admodum erroribus at, vix cu tempor partiendo philosophia. Autem vocent in eum, inani adolescens ullamcorper eos in. Vim id oratio adipisci nominati, malis delectus mediocritatem in vel. Iisque atomorum nec id, te cibo soleat urbanitas mea. Est ei inani iracundia. Unum lobortis in sea.',
					name: 'user_222',
					votes: 2,
					modifiedDate: new Date('11/24/2016'),
					replies:[
						{
							description: "reply to comment 2",
							name: "user_223",
							modifiedDate: new Date(),
						}
					],
					isRightAnswer : true
				}
			]
		},

		2: {
			subject: "subject 3",
			description: 'Lorem ipsum dolor sit amet, eos alii admodum erroribus at, vix cu tempor partiendo philosophia. Autem vocent in eum, inani adolescens ullamcorper eos in. Vim id oratio adipisci nominati, malis delectus mediocritatem in vel. Iisque atomorum nec id, te cibo soleat urbanitas mea. Est ei inani iracundia. Unum lobortis in sea.',
			name : 'user_name',
			votes: 2,
			numberOfComments: 0,
			modifiedDate: new Date('11/20/2016'),
			isSolved:false,
			comments: []
		},
		3: {
			subject: "subject 4",
			description : 'my Description 4',
			name : 'user_name',
			votes: 0,
			numberOfComments: 0,
			modifiedDate: new Date('11/27/2016'),
			isSolved:false,
			comments: []
		},
	}
};


export default fromJS(storage);

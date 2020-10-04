import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCourses: (_) =>
			getRequest(URL, ''),
		
	},
	
};

export default resolvers;

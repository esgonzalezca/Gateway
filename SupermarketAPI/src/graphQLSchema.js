import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './supermarket/categories/typeDefs';

import {
	courseTypeDef,
    courseQueries,
    courseMutations
    
} from './infoms/course/typeDefs';

import categoryResolvers from './supermarket/categories/resolvers';
import courseResolvers from './infoms/course/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
        courseTypeDef
	],
	[
		categoryQueries,
        courseQueries
        
	],
	[
		categoryMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		categoryResolvers,
        courseResolvers
	)
});

export const courseTypeDef = `
  type Curso {
      course_id: Int!
      course_description: String!
    course_name: String!
  }
  input CourseInput {
      course_description: String!
    course_name: String!
  }`;

export const courseQueries = `
      allCourses: [Curso]!
      
  `;

export const courseMutations = `
    
`;

import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST
    : // : 'http://localhost:3030';
      'https://learnla-api-staging.herokuapp.com';

const { socketio, authentication } = feathers;

const socket = io(HOST);
const client = feathers();

client.configure(socketio(socket, { timeout: 15000 }));
// client.configure(
//   authentication({
//     storage: window.localStorage,
//     storageKey: 'learnla',
//   })
// );

// export const FeathersClient = client;

// export const VersionService = client.service('versions');
// export const TeacherService = client.service('teachers');
// export const StudentService = client.service('students');
// export const AdminService = client.service('admins');
export const CourseAdService = client.service('course-ads');
// export const StudentAdService = client.service('student-ads');
// export const MatchingService = client.service('matchings');
// export const MatchingLogsService = client.service('matching-logs');
// export const TicketsService = client.service('tickets');

// export const AuthByJWT = async () => client.authenticate({
//   strategy: 'jwt',
//   accessToken: window.localStorage.learnla,
//   platform: APP.platform,
// });

// export const AuthByPassword = async (phone, password) => client.authenticate({
//   strategy: 'local',
//   phone,
//   password,
//   platform: APP.platform,
// });

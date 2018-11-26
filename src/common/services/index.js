import io from 'socket.io-client';
import feathers from '@feathersjs/client';

const HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST
    : // : 'http://localhost:3030';
      'https://learnla-api-staging.herokuapp.com';

const { socketio, authentication } = feathers;

const socket = io(HOST);
const feathersClient = feathers();

feathersClient.configure(socketio(socket, { timeout: 15000 }));
// feathersClient.configure(
//   authentication({
//     storage: window.localStorage,
//     storageKey: 'learnla',
//   })
// );

export const CourseAdService = feathersClient.service('course-ads');
export default feathersClient;

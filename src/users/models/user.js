import getUsers from '../queries/getUsers';
import getUser from '../queries/getUser';
import getRandomUsers from '../queries/getRandomUsers';
import loginUser from '../mutations/login-user';

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getRandomUsers: getRandomUsers,
  login: loginUser
}

import { decorate, observable } from 'mobx';

class Users {
  testUser = 'testUser';
}

decorate(Users, {
  testUser: observable,
})

const users = new Users();

export default users;


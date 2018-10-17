
import { observable, action } from 'mobx';

class Users {
  @observable testUser = 'testUser';
}

const users = new Users();

export default users;


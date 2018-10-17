
import { observable, action } from 'mobx';

class Tasks {
  @observable testTask = 'testTask';
}

const tasks = new Tasks();

export default tasks;


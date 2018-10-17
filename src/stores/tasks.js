
import { decorate, observable } from 'mobx';

class Tasks {
  testTask = 'testTask';
}

decorate(Tasks, {
  testTask: observable,
})

const tasks = new Tasks();

export default tasks;


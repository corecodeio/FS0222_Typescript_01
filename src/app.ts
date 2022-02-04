import { prompt } from 'enquirer';

type Form = {
  info: { name: string; lastname: string; age: string };
};

// input type
const getInput = async (): Promise<{ username: string }> => {
  const input: { username: string } = await prompt({
    type: 'input',
    name: 'username',
    message: 'What is your username?',
  });
  return input;
};

// form type
const getForm = async (): Promise<Form> => {
  const input: Form = await prompt({
    type: 'form',
    name: 'info',
    message: 'Fill the form',
    choices: [
      { name: 'name', message: 'Name' },
      { name: 'lastname', message: 'Last Name' },
      { name: 'age', message: 'Age' },
    ],
  });
  return input;
};

// select type
const getSelect = async (): Promise<number> => {
  const input: { option: string } = await prompt({
    type: 'select',
    name: 'option',
    message: 'Select an option',
    choices: [
      { name: '1', message: 'Option #1' },
      { name: '2', message: 'Option #2' },
      { name: '3', message: 'Option #3' },
    ],
  });
  return Number(input.option);
};

const start = async () => {
  console.log('====== START =====');
  // let input = await getInput();
  // console.log(input.username);
  // let form = await getForm();
  // console.log(form.info.age);
  let select = await getSelect();
  console.log(select);
};

start();

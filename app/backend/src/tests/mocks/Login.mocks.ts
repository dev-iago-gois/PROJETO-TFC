const user = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

const wrongPassUser = {
  id: 1,
  name: 'Jon Doe',
  email: 'jondoe@email.com',
  password: 'xxxxxxxxxx',
};

const validLoginBody = { email: 'admin@admin.com', password: 'secret_admin' };
const invalidPasswordLoginBody = { email: 'jondoe@email.com', password: 'Jon' };


export {
  user,
  wrongPassUser,
  validLoginBody,
  invalidPasswordLoginBody,
}
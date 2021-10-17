import { Selector } from 'testcafe';

fixture`First test`.page`http://localhost:3000/`;

test('Check if login & Register buttons exsist', async (t) => {
  await t
    .click('#login-btn')
    .typeText('input[name=email]', 'bob@test.com')
    .typeText('input[name=password]', 'Pa$$w0rd')
    .click('button[type=submit]')
    .click('a[href=/createActivity]');
});

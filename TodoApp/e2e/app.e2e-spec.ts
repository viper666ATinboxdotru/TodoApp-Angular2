import { TodoAppCLIPage } from './app.po';

describe('todo-app-cli App', function() {
  let page: TodoAppCLIPage;

  beforeEach(() => {
    page = new TodoAppCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

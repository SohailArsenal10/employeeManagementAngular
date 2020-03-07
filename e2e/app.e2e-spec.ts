import { EmployeeManagementAngularPage } from './app.po';

describe('employee-management-angular App', function() {
  let page: EmployeeManagementAngularPage;

  beforeEach(() => {
    page = new EmployeeManagementAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

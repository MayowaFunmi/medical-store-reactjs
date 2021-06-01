class Config{
  static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
  static homeUrl = '/home';
  static refreshApiUrl = 'http://127.0.0.1:8000/api/refresh_token/';
  static companyApiUrl = 'http://127.0.0.1:8000/api/company/';
  static logoutPageUrl = '/logout';

  static sidebarItem = [
    { index: '0', title: "Home", url: '/home', icons: 'home' },
    { index: '1', title: "Company", url: '/company', icons: 'assessment' },
  ]
}

export default Config;

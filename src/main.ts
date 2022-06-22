export class SelectedTrans {
  constructor(private token: string) {}

  static init(token: string) {
    return new SelectedTrans(token);
  }

  getToken(): string {
    return this.token;
  }
}

export class SelectedTrans {
  private static _instance: SelectedTrans;

  constructor(private token: string) {}

  static init(token: string) {
    return this._instance || (this._instance = new this(token));
  }

  getToken(): string {
    return this.token;
  }
}

class Storage {
  public setStorage({ key, value }: { key: string; value: string }) {
    localStorage.setItem(key, value);
  }

  public getStorage({ key }: { key: string }) {
    return localStorage.getItem(key);
  }

  public removeStorage({ key }: { key: string }) {
    localStorage.removeItem(key);
  }
}

export default new Storage();

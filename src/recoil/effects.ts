import Storage from "../utils/Storage";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = Storage.getStorage({ key });

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string[], _: any, isReset: boolean) => {
      isReset
        ? Storage.removeStorage({ key })
        : Storage.setStorage({ key, value: JSON.stringify(newValue) });
    });
  };

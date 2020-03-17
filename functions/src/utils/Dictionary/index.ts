interface DictionaryItem<T extends string, A> {
  key: T;
  value: A;
}

export interface DictionaryProvider<T extends string, A> {
  getAll(): DictionaryItem<T, A>[];
  getFor(key: T): A;
}

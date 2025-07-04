export default <T extends Record<string, unknown>>(data: T): string => {
  const query: string[] = [];

  const build = (obj: unknown, keyPrefix?: string): void => {
    if (obj === null || obj === undefined) {
      return;
    }

    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        build(item, keyPrefix ? `${keyPrefix}` : '');
      });

      return;
    }

    if (obj instanceof Date) {
      query.push(`${keyPrefix}=${encodeURIComponent(obj.toISOString())}`);
      return;
    }

    if (typeof obj === 'object') {
      Object.keys(obj).forEach((key) => {
        const value = obj[key as keyof typeof obj];
        build(value, keyPrefix ? `${keyPrefix}[${encodeURIComponent(key)}]` : encodeURIComponent(key));
      });

      return;
    }

    query.push(`${keyPrefix}=${encodeURIComponent(obj as string)}`);
  };

  build(data);

  return query.join('&');
};

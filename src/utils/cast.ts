const isBooleanString = (value: string): value is 'true' | 'false' => {
  return value === 'true' || value === 'false';
};

const isNullString = (value: string): value is 'null' => {
  return value === 'null';
};

const isJsonStructure = (value: string): boolean => {
  const trimmed = value.trim();

  return (
      (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
      (trimmed.startsWith('[') && trimmed.endsWith(']'))
  );
};

const isNumericString = (value: string): boolean => {
  const trimmed = value.trim();

  if (!trimmed) {
    return false;
  }

  const parsed = Number(trimmed);

  return Number.isFinite(parsed);
};

const parseNumber = (value: string): number | string => {
  return isNumericString(value) ? Number(value) : value;
};

const parseBoolean = (value: string): boolean | string => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return value;
};

const parseNull = (value: string): null | string => {
  return value === 'null' ? null : value;
};

const parseJson = (value: string): unknown => {
  if (!isJsonStructure(value)) {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export type CastType = 'auto' | 'string' | 'number' | 'boolean' | 'null' | 'json';

const parseAuto = (value: string): unknown => {
  if (isBooleanString(value)) {
    return value === 'true';
  }

  if (isNullString(value)) {
    return null;
  }

  if (isNumericString(value)) {
    return Number(value);
  }

  if (isJsonStructure(value)) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  return value;
};

export const cast = (value: string, type: CastType = 'auto'): unknown => {
  switch (type) {
    case 'string':
      return value;

    case 'number':
      return parseNumber(value);

    case 'boolean':
      return parseBoolean(value);

    case 'null':
      return parseNull(value);

    case 'json':
      return parseJson(value);

    case 'auto':
    default:
      return parseAuto(value);
  }
};

export default cast;

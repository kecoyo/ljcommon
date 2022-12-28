export function pick(object: { [key: string]: any }, props0: Array<string>, props1?: Array<string>, props2?: Array<string>) {
  const target: { [key: string]: any } = {};
  const props = [...props0, ...(props1 || []), ...(props2 || [])];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && props.includes(key)) {
      target[key] = object[key];
    }
  }
  return target;
}

export function omit(object: { [key: string]: any }, props0: Array<string>, props1?: Array<string>, props2?: Array<string>) {
  const target: { [key: string]: any } = {};
  const props = [...props0, ...(props1 || []), ...(props2 || [])];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !props.includes(key)) {
      target[key] = object[key];
    }
  }
  return target;
}

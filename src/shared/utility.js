export function updateObject(oldObj, updatedProperties) {
  return {
    ...oldObj,
    ...updatedProperties,
  };
}

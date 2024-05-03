export const formatLink = (val: string | undefined) => {
  // Проверяем, определено ли значение val
  console.log(val)
  if (val !== undefined) {
    return val.replace('-', '/');
  } else {
    return '';
  }
}
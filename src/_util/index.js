const px2rem = num => `${Number(num) / 75}rem`
const isColor = (str) => {
  str = str.toLocaleLowerCase(str)
  return str.startsWith('#') || str.startsWith('rgb') || str.startsWith('hsl')
}

export default {
  px2rem,
  isColor,
}

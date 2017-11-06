const px2rem = num => `${Number(num) / 75}rem`
const isColor = (str) => {
  str = str.toLocaleLowerCase()
  return str.startsWith('#') || str.startsWith('rgb') || str.startsWith('hsl')
}

export default {
  px2rem,
  isColor,
  prefix: 'clover-',
}

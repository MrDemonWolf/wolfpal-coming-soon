import Vue from 'vue'

Vue.filter('two_digits', (val) => {
  if (val < 0) {
    return '00'
  }
  if (val.toString().length <= 1) {
    return `0${val}`
  }
  return val
})

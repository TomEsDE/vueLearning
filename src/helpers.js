export default {
  getCustomListRange (inclusiveFrom, inclusiveTo) {
    var list = [...Array(Math.max(inclusiveFrom, inclusiveTo) - Math.min(inclusiveFrom, inclusiveTo) + 1).keys()].map(n => n + Math.min(inclusiveFrom, inclusiveTo))
    // range geht immer von min->max, daher Liste 'umdrehen' falls nötig
    // console.log('list[0]: ' + list[0] + ' - inclusiveFrom: ' + inclusiveFrom)
    // console.log(' >>> list[0] - inclusiveFrom === 0: ' + (list[0] - inclusiveFrom === 0))
    // console.log(' >>> list[0] === inclusiveFrom: ' + (list[0] === inclusiveFrom))
    if (list[0] - inclusiveFrom !== 0) {
      list.reverse()
    }
    return list
  }
}

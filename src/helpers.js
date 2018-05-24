import { EventBus } from './event-bus.js'

function getCustomListRange (inclusiveFrom, inclusiveTo) {
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

function trimMeBaby (text) {
  return text.trim()
}

function checkAxiosException (ex, callback, message) {
  console.log('checkAxiosException >>> message: ' + message)
  var msg = ex.message
  if (message) msg = message

  if (ex.response !== undefined && ex.response.status === 401) {
    callback.apply()
    EventBus.$emit('sending-login-event', 'show modal login dialog')
    // msg = 'Login erforderlich'
  } else {
    EventBus.$emit('global-error', { msg: msg, type: 'error', sticky: true })
  }
}

export default {
  getCustomListRange,
  trimMeBaby,
  checkAxiosException
}

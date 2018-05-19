export default class Connection {

  constructor(opt = {}) {
    this.listener = this.listener.bind(this)
    this.data = {
      effectiveType: null,
      downlink: null,
      saveData: null,
      rtt: null,
    }
  }

  get info() {
    return this.data
  }

  init() {
    if (!navigator.connection) return
    navigator.connection.addEventListener('change', this.listener)
    this.listener()
  }

  listener() {
    if (!navigator.connection) return
    const assign = Object.assign
    const connection = navigator.connection
    assign(this.data, {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      saveData: connection.saveData,
      rtt: connection.rtt,
    })
  }

  destroy() {
    if (!navigator.connection) return
    navigator.connection.removeEventListener('change', this.listener)
    this.data = null
  }
}
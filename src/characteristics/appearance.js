const { Characteristic } = require('bleno')

const APPEARANCE_CHARACTERISTIC_UUID = '2A01'

const value = Buffer.alloc(2)
value.writeUInt16LE(961)

class Appearance extends Characteristic {
  constructor() {
    super({
      uuid: APPEARANCE_CHARACTERISTIC_UUID,
      properties: ['read'],
      value,
    })
  }
}

module.exports = Appearance

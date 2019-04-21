import * as keypairs from 'casinocoin-libjs-keypairs'
import * as binary from 'casinocoin-libjs-binary-codec'
import {validate, cscToDrops} from '../common'

function verifyPaymentChannelClaim(channel: string, amount: string,
  signature: string, publicKey: string
): string {
  validate.verifyPaymentChannelClaim({channel, amount, signature, publicKey})

  const signingData = binary.encodeForSigningClaim({
    channel: channel,
    amount: cscToDrops(amount)
  })
  return keypairs.verify(signingData, signature, publicKey)
}

export default verifyPaymentChannelClaim

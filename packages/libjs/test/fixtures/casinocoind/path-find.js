'use strict';

module.exports.generateIOUPaymentPaths =
function(request_id, sendingAccount, destinationAccount, destinationAmount) {
  return JSON.stringify({
    'id': request_id,
    'status': 'success',
    'type': 'response',
    'result': {
      'full_reply': true,
      'source_account': sendingAccount,
      'destination_amount': destinationAmount,
      'alternatives': [
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'rHHa9t2kLQyXRbdLkSzEgkzwf9unmFgZs9',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rHHa9t2kLQyXRbdLkSzEgkzwf9unmFgZs9',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': {
            'currency': 'JPY',
            'issuer': sendingAccount,
            'value': '0.1117218827811721'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              },
              {
                'currency': destinationAmount.currency,
                'issuer': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': {
            'currency': 'USD',
            'issuer': sendingAccount,
            'value': '0.001002'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'currency': destinationAmount.currency,
                'issuer': destinationAmount.issuer,
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'rsP3mgGb2tcYUrxiLFiHJiQXhsziegtwBc',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rsP3mgGb2tcYUrxiLFiHJiQXhsziegtwBc',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'rf9X8QoYnWLHMHuDfjkmRcD2UE5qX5aYV',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'rDVdJ62foD1sn7ZpxtXyptdkBSyhsQGviT',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rDVdJ62foD1sn7ZpxtXyptdkBSyhsQGviT',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'rfQPFZ3eLcaSUKjUy7A3LAmDNM4F9Hz9j1',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ],
            [
              {
                'currency': destinationAmount.currency,
                'issuer': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 48,
                'type_hex': '0000000000000030'
              },
              {
                'account': 'rpHgehzdpfWRXKvSv6duKvVuo1aZVimdaT',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': destinationAmount.issuer,
                'type': 1,
                'type_hex': '0000000000000001'
              }
            ]
          ],
          'source_amount': '207669'
        }
      ],
      'destination_account': destinationAccount,
      'destination_currencies': [
        'USD',
        'JOE',
        'BTC',
        'DYM',
        'CNY',
        'EUR',
        '015841551A748AD2C1F76FF6ECB0CCCD00000000',
        'MXN',
        'CSC'
      ]
    }
  });
};

module.exports.generateCSCPaymentPaths =
function(request_id, sendingAccount, destinationAccount) {
  return JSON.stringify({
    'id': request_id,
    'status': 'success',
    'type': 'response',
    'result': {
      'full_reply': true,
      'alternatives': [
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'rMAz5ZnK73nyNUL4foAvaxdreczCkG3vA6',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ]
          ],
          'source_amount': {
            'currency': 'JPY',
            'issuer': sendingAccount,
            'value': '0.00005460001'
          }
        },
        {
          'paths_canonical': [],
          'paths_computed': [
            [
              {
                'account': 'cHgi1NnXELNYchbFpAVXdoX22iWJti2Kgs',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': destinationAccount,
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ],
            [
              {
                'account': 'cDEDNoEfjywwdyGNgPXXsQ679iYoA8Lm6G',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'account': 'r3MeEnYZY9fAd5pGjAWf4dfJsQBVY9FZRL',
                'type': 1,
                'type_hex': '0000000000000001'
              },
              {
                'currency': 'CSC',
                'type': 16,
                'type_hex': '0000000000000010'
              }
            ]
          ],
          'source_amount': {
            'currency': 'USD',
            'issuer': sendingAccount,
            'value': '0.0000005158508428100899'
          }
        }
      ],
      'destination_account': destinationAccount,
      'destination_currencies': [
        'USD',
        'CSC'
      ]
    }
  });
};

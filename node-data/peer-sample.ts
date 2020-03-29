interface IAddress {
  ip: string;
  serialization_version: string;
  service_flags: string;
  time: number;
};

interface IPeer {
  address: IAddress;
  source: string;
  last_success: number;
  attempts: number
};

const peers: IPeer[] = [
  {
    address: {
      ip: "13.251.68.54:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570812853
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "18.136.51.188:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001101",
      time: 1572279766
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "54.38.236.0:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570743243
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "61.74.109.22:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571571128
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "67.231.16.54:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000101101",
      time: 1572283472
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "71.82.135.102:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572296756
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "73.170.66.172:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571773823
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "82.145.55.56:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571952796
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "104.199.248.144:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010011111111",
      time: 1572253606
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "108.61.193.173:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570977624
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "144.91.64.83:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572284894
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "145.239.4.187:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572255626
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "173.95.72.234:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571938288
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "190.196.60.122:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572051062
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "216.74.32.109:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001101",
      time: 1572056783
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "3.220.203.233:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001101",
      time: 1572267218
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "13.231.241.62:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570965637
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "13.237.147.15:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570783648
    },
    source: "fd6b:88c0:8724:95c1:be86:64d:b90:2473",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "69.64.225.2:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572553909
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "82.217.245.7:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572388136
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 1572183440,
    attempts: 0
  },
  {
    address: {
      ip: "84.68.28.162:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572505718
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "85.105.97.238:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000111101",
      time: 1572362273
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "85.119.108.134:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000111101",
      time: 1572433812
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "92.63.192.206:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572321974
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "146.71.87.11:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572547806
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "167.99.224.63:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572334515
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "183.230.93.139:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572378834
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "185.10.45.32:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572516607
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "185.45.112.177:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572505700
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "192.249.121.27:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000101101",
      time: 1572285549
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "204.93.113.108:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572452489
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 1
  },
  {
    address: {
      ip: "212.237.96.98:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572313090
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "2.51.181.193:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572275112
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "50.2.13.166:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572448200
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "65.36.83.125:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572477502
    },
    source: "fd6b:88c0:8724:dc69:65:6784:6fc4:665c",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "13.115.223.219:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572292953
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "34.247.13.127:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572213561
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "45.32.239.77:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570923419
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "62.195.9.55:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571797481
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "67.207.81.73:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571536295
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "68.183.70.41:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571871967
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "68.183.102.125:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570777900
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "72.66.125.203:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1572298522
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "74.110.57.254:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570911207
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "77.163.136.136:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000011101",
      time: 1571809567
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  },
  {
    address: {
      ip: "88.13.203.226:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000000000001001",
      time: 1570950323
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 1
  },
  {
    address: {
      ip: "92.110.128.7:8333",
      serialization_version: "84bf0200",
      service_flags: "0000000000000000000000000000000000000000000000000000010000001101",
      time: 1571282470
    },
    source: "fd6b:88c0:8724:28b9:e107:1c15:bc1a:98b9",
    last_success: 0,
    attempts: 0
  }
]
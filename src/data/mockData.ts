import { ATM, Bank } from '../types';

export const banks: Bank[] = [
  { id: 'mandiri', name: 'Bank Mandiri', logo: '🏦', color: '#FFD700' },
  { id: 'bca', name: 'BCA', logo: '🏧', color: '#0066CC' },
  { id: 'bri', name: 'BRI', logo: '🏛️', color: '#FF6B35' },
  { id: 'bni', name: 'BNI', logo: '🏢', color: '#FF8C00' },
  { id: 'cimb', name: 'CIMB Niaga', logo: '🏪', color: '#B22222' }
];

export const atmData: ATM[] = [
  {
    id: 'atm-001',
    bankName: 'Bank Mandiri',
    bankLogo: 'https://th.bing.com/th/id/R.c14259eb75c4bfb13197ea71251a70f2?rik=aL%2bvD3TUh4o3WA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f06%2fMandiri_logo.png&ehk=qGi6DtWU5BjvkDHWSgY4AFdqKPgBdD9LpSh1aRUsKM0%3d&risl=&pid=ImgRaw&r=0',
    location: 'Mall Central Park - Lantai 2',
    fullAddress: 'Jl. Letjen S. Parman No.28, RT.12/RW.6, Tomang, Kec. Grogol petamburan, Jakarta Barat',
    cashStatus: 'available',
    crowdStatus: 'sedang',
    operatingHours: '24 Jam',
    features: ['Tarik Tunai Tanpa Kartu', 'Setor Tunai', 'Transfer'],
    coordinates: { lat: -6.1751, lng: 106.7973 },
    image: 'https://pacificplace.b-cdn.net/directory/98unl/image00012.jpg'
  },
  {
    id: 'atm-002',
    bankName: 'BCA',
    bankLogo: 'https://iconape.com/wp-content/png_logo_vector/bca-bank-central-asia.png',
    location: 'Plaza Indonesia - Ground Floor',
    fullAddress: 'Jl. M.H. Thamrin No.Kav. 28-30, RT.9/RW.5, Gondangdia, Kec. Menteng, Jakarta Pusat',
    cashStatus: 'low',
    crowdStatus: 'ramai',
    operatingHours: '24 Jam',
    features: ['Tarik Tunai Tanpa Kartu', 'Penarikan Valuta Asing', 'Transfer'],
    coordinates: { lat: -6.1932, lng: 106.8226 },
    image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1564908110/jwyz28n3lxlt7gu16k8z.jpg'
  },
  {
    id: 'atm-003',
    bankName: 'BRI',
    bankLogo: 'https://www.freelogovectors.net/wp-content/uploads/2023/02/bri-logo-freelogovectors.net_.png',
    location: 'Grand Indonesia - Lantai B1',
    fullAddress: 'Jl. M.H. Thamrin No.1, RT.1/RW.5, Gondangdia, Kec. Menteng, Jakarta Pusat',
    cashStatus: 'available',
    crowdStatus: 'sepi',
    operatingHours: '06:00 - 22:00',
    features: ['Setor Tunai', 'Transfer', 'Cek Saldo'],
    coordinates: { lat: -6.1944, lng: 106.8231 },
    image: 'https://uploads-ssl.webflow.com/62b477ccbf74cf1bbe23236d/649a7ff1031a3bcf259b556d_cara-setor-tunai-lewat-atm-bri.jpeg'
  },
  {
    id: 'atm-004',
    bankName: 'BNI',
    bankLogo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj39zn7eOgj2ElVqDE6OjJOZDdMmkqMtYHS6Gzf-GEXxWT8J_mFlr13nIHNoAuLGmNTDJogMtNZ0YCzoptEPCCnL52ZUb8D_pxwz2p1gOtQF1307-saAODR5RVsOdgS8SYM_CH4lXkPtNPKMNpWh_MiiGdK6fTfMlg5ZoNwMau6qKoYaxTp0hotAQ/s1912/Bank%20BNI%20Logo.png',
    location: 'Senayan City - Lantai 1',
    fullAddress: 'Jl. Asia Afrika No.8, RT.1/RW.3, Gelora, Kec. Tanah Abang, Jakarta Pusat',
    cashStatus: 'empty',
    crowdStatus: 'sepi',
    operatingHours: '24 Jam',
    features: ['Tarik Tunai Tanpa Kartu', 'Transfer'],
    coordinates: { lat: -6.2251, lng: 106.8031 },
    image: 'https://3.bp.blogspot.com/-LrQ_UOLGy4I/VzeqeRBJtnI/AAAAAAAAB3U/fR5b8Krt7O02-i84bNDU4p2W5Fv2fcHngCLcB/s1600/atm-bni.jpg'
  },
  {
    id: 'atm-005',
    bankName: 'CIMB Niaga',
    bankLogo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc77NYlYHCDSz4vDsB-g5VLPT1cyWM_GRqpGitoGT_6i7J91jUOqVko_tU2qUFr4mrZYE0qM9iujr-aVV48oHtiUOgeeTc1HnfwhOh4J_p4XN5VuwuEt_pLNIgqF8xCzYRh6IFrCSQEbX8YfNMGoLvOc9ZU0bW3nme2yPd2n2SXuwx0fXOEB1m2g/w640-h94/CIMB%20Niaga%20Logo%20(PNG720p).png',
    location: 'Kemang Village - Atrium',
    fullAddress: 'Jl. Kemang Raya No.8, RT.8/RW.1, Bangka, Kec. Mampang Prapatan, Jakarta Selatan',
    cashStatus: 'available',
    crowdStatus: 'sedang',
    operatingHours: '24 Jam',
    features: ['Tarik Tunai Tanpa Kartu', 'Setor Tunai', 'Penarikan Valuta Asing'],
    coordinates: { lat: -6.2615, lng: 106.8155 },
    image: 'https://lokasiterdekat.com/wp-content/uploads/2023/04/ATM-CIMB-Niaga-Terdekat.jpg'
  },
  {
    id: 'atm-006',
    bankName: 'Bank Mandiri',
    bankLogo: 'https://th.bing.com/th/id/R.c14259eb75c4bfb13197ea71251a70f2?rik=aL%2bvD3TUh4o3WA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f06%2fMandiri_logo.png&ehk=qGi6DtWU5BjvkDHWSgY4AFdqKPgBdD9LpSh1aRUsKM0%3d&risl=&pid=ImgRaw&r=0',
    location: 'Blok M Square - Lantai GF',
    fullAddress: 'Jl. Melawai Raya No.1, RT.1/RW.1, Melawai, Kec. Kby. Baru, Jakarta Selatan',
    cashStatus: 'low',
    crowdStatus: 'ramai',
    operatingHours: '24 Jam',
    features: ['Setor Tunai', 'Transfer', 'Cek Saldo'],
    coordinates: { lat: -6.2441, lng: 106.7991 },
    image: 'https://pacificplace.b-cdn.net/directory/98unl/image00012.jpg'
  },
  {
    id: 'atm-007',
    bankName: 'BCA',
    bankLogo: 'https://iconape.com/wp-content/png_logo_vector/bca-bank-central-asia.png',
    location: 'Thamrin City - Lantai B1',
    fullAddress: 'Jl. M.H. Thamrin No.11, RT.8/RW.4, Gondangdia, Kec. Menteng, Jakarta Pusat',
    cashStatus: 'available',
    crowdStatus: 'sedang',
    operatingHours: '24 Jam',
    features: ['Tarik Tunai Tanpa Kartu', 'Transfer', 'Penarikan Valuta Asing'],
    coordinates: { lat: -6.1869, lng: 106.8238 },
    image: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1564908110/jwyz28n3lxlt7gu16k8z.jpg'
  },
  {
    id: 'atm-008',
    bankName: 'BRI',
    bankLogo: 'https://www.freelogovectors.net/wp-content/uploads/2023/02/bri-logo-freelogovectors.net_.png',
    location: 'Kuningan City - Food Court',
    fullAddress: 'Jl. Prof. DR. Satrio No.Kav. 18, RT.4/RW.4, Kuningan, Karet Kuningan, Jakarta Selatan',
    cashStatus: 'available',
    crowdStatus: 'sepi',
    operatingHours: '06:00 - 22:00',
    features: ['Setor Tunai', 'Transfer', 'Cek Saldo'],
    coordinates: { lat: -6.2198, lng: 106.8301 },
    image: 'https://uploads-ssl.webflow.com/62b477ccbf74cf1bbe23236d/649a7ff1031a3bcf259b556d_cara-setor-tunai-lewat-atm-bri.jpeg'
  }
];
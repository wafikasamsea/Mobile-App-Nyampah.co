import {
    PlasticImage2,
    PlasticImage,
    EwasteImage2,
    EwasteImage,
    Ewaste,
    Glass,
    MilanDepan,
    MilanBelakang,
    Plastic,
    LiverpoolDepan,
    LiverpoolBelakang,
    GlassImage,
    GlassImage2,
  } from '../../assets';
  
  export const dummyPesanans = [
    {
      id: 1,
      tanggalPemesanan: 'Rabu, 3 Mei 2023',
      status: 'keranjang',
      totalHarga: 500000,
      berat: 1,
      pesanans: [
        {
          id: 1,
          product: {
            id: 1,
            nama: 'Sampah Plastik',
            gambar: [PlasticImage, PlasticImage2],
            liga: {
              id: 2,
              nama: 'Premier League',
              gambar: Glass,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Sampah Industri',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: null,
          ukuran: "L"
        },
        {
          id: 2,
          product: {
            id: 2,
            nama: 'Sampah Organik',
            gambar: [EwasteImage, EwasteImage2],
            liga: {
              id: 4,
              nama: 'Ewaste',
              gambar: Ewaste,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Sampah Industri',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 3,
          totalHarga: 375000,
          keterangan: null,
          ukuran: "L"
        }
      ]
    },
    {
      id: 2,
      tanggalPemesanan: 'Senin, 1 Mei 2023',
      status: 'lunas',
      totalHarga: 375000,
      berat: 0.75,
      pesanans: [
        {
          id: 1,
          product: {
            id: 5,
            nama: 'Sampah Kaca',
            gambar: [GlassImage, GlassImage2],
            liga: {
              id: 2,
              nama: 'Glass Waste',
              gambar: Glass,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Sampah Industri',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 1,
          totalHarga: 125000,
          keterangan: "Nama Jersey : Eko Nomor Punggung : 9.",
          ukuran: "L"
        },
        {
          id: 2,
          product: {
            id: 7,
            nama: 'Sampah Elektronik',
            gambar: [EwasteImage, EwasteImage2],
            liga: {
              id: 3,
              nama: 'Serie A',
              gambar: Plastic,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Sampah Industri',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 2,
          totalHarga: 255000,
          keterangan: "",
          ukuran: "M"
        }
      ]
    }
  ];
  
import {
    ChelseaBelakang,
    SampahSatu,
    DortmundBelakang,
    DortmundDepan,
    Bundesliga,
    PremierLeague,
    MilanDepan,
    MilanBelakang,
    SerieA,
    LiverpoolDepan,
    LiverpoolBelakang,
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
            gambar: [SampahSatu, ChelseaBelakang],
            liga: {
              id: 2,
              nama: 'Premier League',
              gambar: PremierLeague,
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
            gambar: [DortmundDepan, DortmundBelakang],
            liga: {
              id: 4,
              nama: 'Bundesliga',
              gambar: Bundesliga,
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
            nama: 'LIVERPOOL AWAY 2018-2019',
            gambar: [LiverpoolDepan, LiverpoolBelakang],
            liga: {
              id: 2,
              nama: 'Premier League',
              gambar: PremierLeague,
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
            nama: 'AC MILAN HOME 2018 2019',
            gambar: [MilanDepan, MilanBelakang],
            liga: {
              id: 3,
              nama: 'Serie A',
              gambar: SerieA,
            },
            harga: 125000,
            berat: 0.25,
            jenis: 'Sampah Industri',
            ukuran: ["S", "M", "L", "XL", "XXL"],
            ready: true
          },
          jumlahPesan: 2,
          totalHarga: 255000,
          keterangan: "Nama Jersey : Afif Nomor Punggung : 10.",
          ukuran: "M"
        }
      ]
    }
  ];
  
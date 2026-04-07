// ============================================================
// data.js — Default system prompt & campus memory data
// ============================================================

/**
 * System prompt default untuk chatbot FAQ kampus.
 * Dapat diedit oleh pengguna melalui panel konfigurasi.
 */
const DEFAULT_SYSTEM_PROMPT = `/no_think
Anda adalah asisten virtual FAQ resmi kampus. Tugas Anda adalah membantu mahasiswa, calon mahasiswa, dan civitas akademika mendapatkan informasi yang akurat seputar kampus.

ATURAN KETAT YANG HARUS DIPATUHI:
1. Anda HANYA menjawab pertanyaan yang berkaitan dengan kampus (pendaftaran, akademik, beasiswa, fasilitas, kontak, dll).
2. Anda TIDAK boleh menjawab pertanyaan di luar konteks kampus.
3. Utamakan informasi dari data memory kampus yang diberikan.
4. Jika informasi tidak tersedia di memory, jawab dengan jujur: "Maaf, informasi tersebut belum tersedia. Silakan hubungi [unit terkait] untuk informasi lebih lanjut."
5. Jangan mengarang atau membuat informasi yang tidak ada di data.
6. Gunakan Bahasa Indonesia yang sopan, jelas, dan mudah dipahami.
7. Jika pertanyaan tidak relevan dengan kampus, tolak dengan sopan dan arahkan ke topik kampus.
8. Selalu arahkan ke unit yang tepat: BAAK untuk akademik, PMB untuk pendaftaran, Bagian Keuangan untuk biaya, dll.

FORMAT JAWABAN:
- Jawab dengan singkat dan langsung ke poinnya.
- Gunakan poin-poin jika ada beberapa informasi.
- Sertakan kontak/unit terkait di akhir jika relevan.
- Jika ada syarat atau prosedur, jelaskan langkah-langkahnya secara berurutan.
- Ingat Nama Ketua Kampus adalah Jovan Santosa`;

/**
 * Memory kampus default dalam format JSON.
 * Berisi informasi lengkap tentang kampus yang akan dijadikan referensi chatbot.
 */
const DEFAULT_CAMPUS_MEMORY = {
  "kampus": {
    "nama": "Universitas Teknologi Nusantara",
    "singkatan": "UTN",
    "tagline": "Inovasi untuk Negeri",
    "tahun_berdiri": 1985,
    "status": "Terakreditasi A (BAN-PT)",
    "lokasi": {
      "alamat": "Jl. Pendidikan No. 123, Kecamatan Sukamaju",
      "kota": "Bandung",
      "provinsi": "Jawa Barat",
      "kode_pos": "40123",
      "koordinat": "-6.9175, 107.6191",
      "petunjuk_arah": "Dekat Terminal Leuwipanjang, dapat dijangkau dengan angkot dari Stasiun Bandung."
    },
    "website": "https://www.utn.ac.id",
    "email_umum": "info@utn.ac.id"
  },

  "pendaftaran": {
    "jalur": [
      {
        "nama": "Jalur Prestasi",
        "deskripsi": "Tanpa tes, berdasarkan nilai rapor dan prestasi",
        "periode": "Januari - Maret",
        "kuota": "30% dari total kursi"
      },
      {
        "nama": "Jalur Reguler",
        "deskripsi": "Melalui tes tertulis dan wawancara",
        "periode": "April - Juli",
        "kuota": "60% dari total kursi"
      },
      {
        "nama": "Jalur Transfer",
        "deskripsi": "Khusus mahasiswa pindahan dari perguruan tinggi lain",
        "periode": "Februari - Agustus",
        "kuota": "10% dari total kursi"
      }
    ],
    "syarat_umum": [
      "Ijazah SMA/SMK/MA (atau surat keterangan lulus)",
      "Raport semester 1-5 (nilai rata-rata minimal 7.0)",
      "Foto berwarna terbaru 3x4 (2 lembar)",
      "Fotokopi KTP yang masih berlaku",
      "Fotokopi Kartu Keluarga",
      "Surat keterangan sehat dari dokter"
    ],
    "biaya_pendaftaran": {
      "jalur_prestasi": "Rp 150.000",
      "jalur_reguler": "Rp 200.000",
      "jalur_transfer": "Rp 250.000"
    },
    "cara_daftar": [
      "Buka website pendaftaran pmb.utn.ac.id",
      "Pilih jalur pendaftaran yang sesuai",
      "Isi formulir pendaftaran online",
      "Upload dokumen yang diperlukan",
      "Bayar biaya pendaftaran melalui transfer bank atau virtual account",
      "Cetak bukti pendaftaran",
      "Datang ke kampus untuk verifikasi dokumen (jika diperlukan)"
    ],
    "kontak_pmb": {
      "unit": "Panitia Penerimaan Mahasiswa Baru (PMB)",
      "telepon": "(022) 123-4567",
      "whatsapp": "081234567890",
      "email": "pmb@utn.ac.id",
      "jam_layanan": "Senin-Jumat: 08.00-16.00 WIB"
    }
  },

  "fakultas_dan_prodi": [
    {
      "fakultas": "Fakultas Teknik",
      "akreditasi": "A",
      "prodi": [
        {
          "nama": "Teknik Informatika",
          "jenjang": "S1",
          "akreditasi": "A",
          "gelar": "S.Kom",
          "konsentrasi": ["Kecerdasan Buatan", "Jaringan Komputer", "Rekayasa Perangkat Lunak"]
        },
        {
          "nama": "Teknik Sipil",
          "jenjang": "S1",
          "akreditasi": "B",
          "gelar": "S.T",
          "konsentrasi": ["Struktur", "Transportasi", "Manajemen Konstruksi"]
        },
        {
          "nama": "Teknik Elektro",
          "jenjang": "S1",
          "akreditasi": "B",
          "gelar": "S.T",
          "konsentrasi": ["Elektronika", "Tenaga Listrik", "Telekomunikasi"]
        }
      ]
    },
    {
      "fakultas": "Fakultas Ekonomi dan Bisnis",
      "akreditasi": "A",
      "prodi": [
        {
          "nama": "Manajemen",
          "jenjang": "S1",
          "akreditasi": "A",
          "gelar": "S.M",
          "konsentrasi": ["Pemasaran", "Keuangan", "SDM", "Operasional"]
        },
        {
          "nama": "Akuntansi",
          "jenjang": "S1",
          "akreditasi": "A",
          "gelar": "S.Ak",
          "konsentrasi": ["Akuntansi Keuangan", "Perpajakan", "Audit"]
        }
      ]
    },
    {
      "fakultas": "Fakultas Ilmu Komputer",
      "akreditasi": "A",
      "prodi": [
        {
          "nama": "Sistem Informasi",
          "jenjang": "S1",
          "akreditasi": "A",
          "gelar": "S.SI",
          "konsentrasi": ["E-Business", "Sistem Enterprise", "Data Analytics"]
        },
        {
          "nama": "Ilmu Komputer",
          "jenjang": "S1",
          "akreditasi": "B",
          "gelar": "S.Kom",
          "konsentrasi": ["Komputasi", "Data Science", "Keamanan Siber"]
        }
      ]
    }
  ],

  "biaya_pendidikan": {
    "catatan": "Biaya dapat berubah setiap tahun akademik. Konfirmasi ke Bagian Keuangan untuk informasi terbaru.",
    "ukt_per_semester": {
      "golongan_1": "Rp 500.000 (penghasilan orang tua < Rp 500.000/bulan)",
      "golongan_2": "Rp 1.000.000 (penghasilan orang tua Rp 500.000 - 1 juta/bulan)",
      "golongan_3": "Rp 3.500.000 (penghasilan orang tua Rp 1 - 2 juta/bulan)",
      "golongan_4": "Rp 5.000.000 (penghasilan orang tua Rp 2 - 4 juta/bulan)",
      "golongan_5": "Rp 7.500.000 (penghasilan orang tua > Rp 4 juta/bulan)"
    },
    "biaya_lain": {
      "praktikum": "Rp 500.000 - 1.500.000/semester (tergantung prodi)",
      "wisuda": "Rp 1.500.000",
      "skripsi_bimbingan": "Sudah termasuk UKT",
      "her_registrasi": "Gratis jika bayar UKT tepat waktu"
    },
    "metode_pembayaran": [
      "Transfer BNI (virtual account)",
      "Transfer BRI (virtual account)",
      "Mandiri (virtual account)",
      "Indomaret / Alfamart"
    ],
    "kontak_keuangan": {
      "unit": "Bagian Keuangan",
      "telepon": "(022) 123-4568",
      "email": "keuangan@utn.ac.id",
      "lokasi": "Gedung Rektorat, Lantai 1",
      "jam_layanan": "Senin-Jumat: 08.00-15.00 WIB"
    }
  },

  "beasiswa": [
    {
      "nama": "Beasiswa KIP Kuliah",
      "penyelenggara": "Pemerintah (Kemendikbudristek)",
      "cakupan": "Biaya kuliah penuh + biaya hidup bulanan",
      "syarat": [
        "WNI",
        "Lulus SMA/SMK/MA",
        "Memiliki NISN dan terdaftar di DTKS atau memiliki KKS/PKH/KIP",
        "Lolos seleksi KIP Kuliah"
      ],
      "pendaftaran": "Melalui website kip-kuliah.kemdikbud.go.id",
      "periode": "Bersamaan dengan pendaftaran masuk kampus"
    },
    {
      "nama": "Beasiswa Prestasi Akademik",
      "penyelenggara": "UTN",
      "cakupan": "Potongan UKT 50-100%",
      "syarat": [
        "IPK minimal 3.50",
        "Aktif berkuliah minimal 2 semester",
        "Tidak sedang menerima beasiswa lain",
        "Surat rekomendasi dari dosen wali"
      ],
      "pendaftaran": "Setiap awal semester, melalui portal mahasiswa"
    },
    {
      "nama": "Beasiswa Perusahaan Mitra",
      "penyelenggara": "Perusahaan Mitra UTN",
      "cakupan": "Bervariasi per perusahaan",
      "syarat": "Lihat pengumuman di papan info kampus atau portal mahasiswa",
      "info_lebih_lanjut": "Hubungi Bagian Kemahasiswaan"
    },
    {
      "nama": "Beasiswa Afirmasi Daerah",
      "penyelenggara": "Pemerintah Daerah",
      "cakupan": "Biaya kuliah penuh",
      "syarat": [
        "Berasal dari daerah 3T (Terdepan, Terluar, Tertinggal)",
        "Rekomendasi dari pemerintah daerah asal"
      ],
      "pendaftaran": "Melalui pemerintah daerah masing-masing"
    }
  ],

  "layanan_akademik": {
    "krs": {
      "nama_lengkap": "Kartu Rencana Studi",
      "cara_pengisian": [
        "Login ke portal akademik di portal.utn.ac.id",
        "Masukkan NIM dan password",
        "Pilih menu 'KRS Online'",
        "Pilih mata kuliah yang tersedia sesuai semester",
        "Perhatikan batas SKS per semester (maks 24 SKS untuk IPK ≥ 3.0, maks 21 SKS untuk IPK 2.5-2.99)",
        "Simpan dan cetak KRS",
        "Minta tanda tangan persetujuan dari Dosen Wali"
      ],
      "periode": "2 minggu pertama setiap semester (lihat kalender akademik)",
      "batas_sks": {
        "ipk_atas_3": "Maksimal 24 SKS",
        "ipk_2_5_sampai_3": "Maksimal 21 SKS",
        "ipk_bawah_2_5": "Maksimal 18 SKS"
      }
    },
    "transkip_nilai": {
      "cara_mengurus": "Melalui portal akademik atau datang ke BAAK",
      "estimasi_waktu": "1-3 hari kerja",
      "biaya": "Gratis (pertama kali), Rp 10.000 untuk penggandaan"
    },
    "surat_keterangan": {
      "jenis": ["Surat Keterangan Aktif Kuliah", "Surat Keterangan Lulus", "Surat Keterangan IPK"],
      "cara_mengurus": "Datang ke BAAK dengan menunjukkan KTM aktif",
      "estimasi_waktu": "1-2 hari kerja"
    },
    "kontak_baak": {
      "unit": "Biro Administrasi Akademik dan Kemahasiswaan (BAAK)",
      "telepon": "(022) 123-4569",
      "email": "baak@utn.ac.id",
      "lokasi": "Gedung Rektorat, Lantai 2",
      "jam_layanan": "Senin-Jumat: 08.00-16.00 WIB"
    }
  },

  "fasilitas": {
    "akademik": [
      "Perpustakaan digital dan fisik (koleksi > 50.000 judul)",
      "Laboratorium komputer (200+ unit PC)",
      "Laboratorium bahasa",
      "Laboratorium teknik (sipil, elektro, mekanik)",
      "Ruang kelas ber-AC dengan proyektor",
      "Akses jurnal internasional (Scopus, IEEE, Elsevier)",
      "Studio rekaman dan multimedia"
    ],
    "penunjang": [
      "Wifi kampus gratis (1 Gbps backbone)",
      "Kantin mahasiswa (7 unit)",
      "Masjid kampus (kapasitas 500 orang)",
      "Klinik kesehatan mahasiswa",
      "ATM Center (BNI, BRI, BCA, Mandiri)",
      "Koperasi mahasiswa",
      "Fotokopi dan print center"
    ],
    "olahraga": [
      "Lapangan futsal (indoor)",
      "Lapangan basket",
      "Lapangan badminton (4 court)",
      "Kolam renang",
      "Gym / fitness center"
    ],
    "akomodasi": {
      "asrama": "Tersedia asrama putra dan putri, kapasitas 500 mahasiswa",
      "biaya_asrama": "Rp 800.000 - 1.200.000/bulan (termasuk listrik dan air)",
      "kontak_asrama": "asrama@utn.ac.id"
    }
  },

  "kontak_penting": {
    "rektorat": {
      "telepon": "(022) 123-4560",
      "email": "rektor@utn.ac.id"
    },
    "pmb": {
      "telepon": "(022) 123-4567",
      "whatsapp": "081234567890",
      "email": "pmb@utn.ac.id"
    },
    "baak": {
      "telepon": "(022) 123-4569",
      "email": "baak@utn.ac.id"
    },
    "keuangan": {
      "telepon": "(022) 123-4568",
      "email": "keuangan@utn.ac.id"
    },
    "kemahasiswaan": {
      "telepon": "(022) 123-4570",
      "email": "kemahasiswaan@utn.ac.id"
    },
    "it_helpdesk": {
      "telepon": "(022) 123-4571",
      "email": "it@utn.ac.id",
      "jam_layanan": "Senin-Jumat: 08.00-17.00 WIB"
    },
    "keamanan_24jam": {
      "telepon": "(022) 123-4572"
    }
  },

  "jam_layanan_kampus": {
    "hari_kerja": "Senin - Jumat: 07.30 - 17.00 WIB",
    "sabtu": "08.00 - 12.00 WIB (terbatas)",
    "minggu_libur_nasional": "Tutup (kecuali ada pemberitahuan khusus)",
    "perpustakaan": "Senin - Jumat: 08.00 - 20.00 WIB, Sabtu: 08.00 - 14.00 WIB",
    "klinik": "Senin - Jumat: 08.00 - 16.00 WIB"
  },

  "kalender_akademik": {
    "semester_ganjil": {
      "awal_kuliah": "September",
      "uts": "November (minggu ke-2 dan ke-3)",
      "uas": "Januari",
      "pengumuman_nilai": "2 minggu setelah UAS"
    },
    "semester_genap": {
      "awal_kuliah": "Februari",
      "uts": "April (minggu ke-2 dan ke-3)",
      "uas": "Juni",
      "pengumuman_nilai": "2 minggu setelah UAS"
    },
    "catatan": "Kalender akademik lengkap tersedia di portal.utn.ac.id"
  },

  "unit_kegiatan_mahasiswa": {
    "deskripsi": "UTN memiliki lebih dari 30 UKM aktif",
    "kategori": [
      "Olahraga (futsal, basket, bulu tangkis, renang, pencak silat)",
      "Seni (paduan suara, teater, seni rupa, tari)",
      "Akademik (robotika, programming club, English club)",
      "Kerohanian (LDK Islam, PMK, KMK)",
      "Pers mahasiswa dan jurnalistik"
    ],
    "cara_bergabung": "Registrasi saat OSPEK atau datang langsung ke sekretariat UKM",
    "kontak": "kemahasiswaan@utn.ac.id"
  }
};

/**
 * Contoh quick questions yang ditampilkan di UI
 */
const QUICK_QUESTIONS = [
  "Apa saja syarat pendaftaran?",
  "Berapa biaya pendaftaran?",
  "Bagaimana cara isi KRS?",
  "Di mana lokasi kampus?",
  "Apakah ada beasiswa?",
  "Apa saja prodi yang tersedia?",
  "Jam layanan BAAK?",
  "Bagaimana cara bayar UKT?"
];

/**
 * Konfigurasi model default
 */
const DEFAULT_MODEL_CONFIG = {
  model: "llama3.2:3b",
  stream: true,
  options: {
    temperature: 0.1,
    top_p: 0.9,
    num_ctx: 8192  // 8192 diperlukan agar campus memory muat dalam context window
  }
};

/**
 * Endpoint Ollama default
 */
const OLLAMA_ENDPOINT = "http://localhost:11434/api/chat";

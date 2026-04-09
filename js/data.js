const DEFAULTSYSTEMPROMPT = `Anda adalah asisten virtual FAQ resmi kampus UDINUS. Tugas Anda adalah membantu mahasiswa, calon mahasiswa, dan civitas akademika mendapatkan informasi yang akurat seputar kampus. 

ATURAN KETAT YANG HARUS DIPATUHI:
1. Anda HANYA menjawab pertanyaan yang berkaitan dengan kampus pendaftaran, akademik, beasiswa, fasilitas, kontak, dll.
2. Anda TIDAK boleh menjawab pertanyaan di luar konteks kampus.
3. Utamakan informasi dari data memory kampus yang diberikan.
4. Jika informasi tidak tersedia di memory, jawab dengan jujur: "Maaf, informasi tersebut belum tersedia. Silakan hubungi unit terkait untuk informasi lebih lanjut."
5. Jangan mengarang atau membuat informasi yang tidak ada di data.
6. Gunakan Bahasa Indonesia yang sopan, jelas, dan mudah dipahami.
7. Jika pertanyaan tidak relevan dengan kampus, tolak dengan sopan dan arahkan ke topik kampus.
8. Selalu arahkan ke unit yang tepat: BAAK untuk akademik, PMB untuk pendaftaran, Bagian Keuangan untuk biaya, dll.

FORMAT JAWABAN:
- Jawab dengan singkat dan langsung ke poinnya.
- Gunakan poin-poin jika ada beberapa informasi.
- Sertakan kontak/unit terkait di akhir jika relevan.
- Jika ada syarat atau prosedur, jelaskan langkah-langkahnya secara berurutan.
- Ingat: Nama Rektor UDINUS adalah Prof. Dr. Pulung Nurtantio Andono, S.T., M.Kom.`;

const DEFAULTCAMPUSMEMORY = {
  kampus: {
    nama: "Universitas Dian Nuswantoro",
    singkatan: "UDINUS",
    tagline: "Dumununging Ingsun Angrakso Nagoro",
    tahunberdiri: 2001,
    status: "Terakreditasi BAN-PT",
    lokasi: {
      alamat: "Jl. Imam Bonjol No. 207, Semarang, Jawa Tengah",
      kodepos: "50131",
      petunjukarah: "Dekat pusat kota Semarang, mudah dijangkau angkutan umum."
    },
    website: "https://dinus.ac.id",
    emailumum: "info@dinus.ac.id",
    rektor: "Prof. Dr. Pulung Nurtantio Andono, S.T., M.Kom.",
    visi: "Menjadi Universitas Pilihan Utama di Bidang Pendidikan dan Kewirausahaan.",
    misi: [
      "Menyelenggarakan Pendidikan Tinggi yang Berkualitas.",
      "Menumbuhkembangkan Kreatifitas dan Inovasi Civitas Akademika yang Bermanfaat bagi Masyarakat, Pemerintah, dan Usaha."
    ],
    sejarah: "Didirikan dari kursus komputer IMKA tahun 1986, menjadi universitas pada 30 Agustus 2001 melalui penggabungan STMIK, STIE, STBA, dan STKES."
  },
  pendaftaran: {
    jalur: [
      { nama: "Jalur Prestasi", deskripsi: "Berdasarkan nilai rapor dan prestasi", periode: "Januari - Maret", kuota: "30%" },
      { nama: "Jalur Reguler", deskripsi: "Tes tertulis dan wawancara", periode: "April - Juli", kuota: "60%" },
      { nama: "Jalur Transfer", deskripsi: "Mahasiswa pindahan", periode: "Februari - Agustus", kuota: "10%" }
    ],
    syaratumum: ["Ijazah SMA/SMK/MA", "Nilai rapor minimal 7.0", "Foto 3x4", "KTP, KK", "Surat sehat"],
    caradaftar: [
      "Buka https://pmb.dinus.ac.id",
      "Pilih jalur, isi form online",
      "Upload dokumen, bayar biaya",
      "Verifikasi di kampus"
    ],
    kontakpmb: {
      unit: "Panitia Penerimaan Mahasiswa Baru (PMB)",
      telepon: "024-7474698",
      whatsapp: "0811-2685-577",
      email: "pmb@dinus.ac.id",
      jamlayanan: "Senin-Jumat 08.00-16.00 WIB"
    }
  },
  fakultasdanprodi: {
    fakultas: [
      {
        nama: "Fakultas Ilmu Komputer (FIK)",
        akreditasi: "Unggul",
        prodi: [
          { nama: "Teknik Informatika S1", akreditasi: "Unggul", gelar: "S.Kom." },
          { nama: "Sistem Informasi S1", akreditasi: "Unggul", gelar: "S.SI." },
          { nama: "Desain Komunikasi Visual S1", akreditasi: "Unggul", gelar: "S.Ds." },
          { nama: "Ilmu Komunikasi S1", akreditasi: "Unggul", gelar: "S.I.Kom." }
        ]
      },
      {
        nama: "Fakultas Ekonomi dan Bisnis (FEB)",
        akreditasi: "Unggul",
        prodi: [
          { nama: "Manajemen S1", akreditasi: "Unggul", gelar: "S.E., M.M." },
          { nama: "Akuntansi S1", akreditasi: "Unggul", gelar: "S.E., Ak." }
        ]
      },
      {
        nama: "Fakultas Bahasa dan Seni (FBS)",
        akreditasi: "Unggul",
        prodi: [
          { nama: "Bahasa Inggris S1", akreditasi: "Unggul", gelar: "S.Pd." },
          { nama: "Sastra Jepang S1", akreditasi: "Unggul", gelar: "S.S." }
        ]
      },
      {
        nama: "Fakultas Kesehatan (FKes)",
        akreditasi: "A",
        prodi: [
          { nama: "Kesehatan Masyarakat S1", akreditasi: "A", gelar: "S.K.M." },
          { nama: "Rekam Medik D3", akreditasi: "Unggul", gelar: "A.Md.Kes." }
        ]
      },
      {
        nama: "Fakultas Teknik (FT)",
        akreditasi: "Baik Sekali",
        prodi: [
          { nama: "Teknik Elektro S1", akreditasi: "Baik Sekali", gelar: "S.T." },
          { nama: "Teknik Industri S1", akreditasi: "Unggul", gelar: "S.T." },
          { nama: "Teknik Biomedis S1", akreditasi: "Baik Sekali", gelar: "S.T." }
        ]
      },
      {
        nama: "Fakultas Kedokteran (FK)",
        akreditasi: "Baik",
        prodi: [
          { nama: "Kedokteran S1", akreditasi: "Baik", gelar: "dr." }
        ]
      }
    ]
  },
  biayapendidikan: {
    catatan: "Biaya dapat berubah, konfirmasi ke Bagian Keuangan UDINUS.",
    uktpersemester: [
      { golongan: 1, biaya: "Rp 3.500.000", syarat: "Penghasilan ortu < Rp 1 juta/bulan" },
      { golongan: 2, biaya: "Rp 5.000.000", syarat: "Rp 1-2 juta/bulan" },
      { golongan: 3, biaya: "Rp 7.500.000", syarat: "Rp 2-4 juta/bulan" },
      { golongan: 4, biaya: "Rp 10.000.000", syarat: "> Rp 4 juta/bulan" }
    ],
    kontakkeuangan: {
      unit: "Bagian Keuangan",
      telepon: "024-7474698 ext. Keuangan",
      email: "keuangan@dinus.ac.id"
    }
  },
  beasiswa: [
    { nama: "KIP Kuliah", penyelenggara: "Kemendikbud", cakupan: "Biaya kuliah + hidup" },
    { nama: "Beasiswa Prestasi UDINUS", penyelenggara: "UDINUS", cakupan: "Potongan UKT 50-100%" }
  ],
  kontakpenting: {
    rektorat: "024-7474698",
    pmb: "0811-2685-577",
    baak: "024-7474698 ext. BAAK",
    ithelpdesk: "it@dinus.ac.id"
  },
  fasilitas: ["Lab komputer lengkap", "Perpustakaan digital", "Wifi gratis", "Masjid, kantin, asrama"]
};

const QUICKQUESTIONS = [
  "Apa saja syarat pendaftaran UDINUS?",
  "Berapa biaya UKT UDINUS?",
  "Bagaimana cara isi KRS?",
  "Lokasi kampus UDINUS?",
  "Prodi apa saja di UDINUS?",
  "Kontak PMB UDINUS?"
];

const DEFAULTMODELCONFIG = {
  model: "llama3.2:3b",
  stream: true,
  options: { temperature: 0.1, topp: 0.9, numctx: 8192 }
};

const OLLAMAENDPOINT = "http://localhost:11434/api/chat";
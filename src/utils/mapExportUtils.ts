import mapImageSrc from '@/PETA KOROWELANG KULON CUSTOM.PNG';

export { mapImageSrc };

/**
 * Utilitas untuk mengunduh peta dalam format PNG resolusi asli
 * dan mencetak / menyimpan dokumen peta dalam format PDF resmi.
 */
export const downloadMapAsPng = async (
  imageSrc: string = mapImageSrc,
  filename = 'PETA_FASILITAS_UMUM_DESA_KOROWELANG_KULON_KKN14_UNWAHAS.png'
): Promise<void> => {
  try {
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    }, 150);
  } catch (error) {
    // Fallback direct anchor download
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const printMapAsPdf = (
  imageSrc: string = mapImageSrc,
  title = 'PETA FASILITAS UMUM & DENAH ADMINISTRASI DESA KOROWELANG KULON - KKN 14 UNWAHAS 2026'
): void => {
  const printWindow = window.open('', '_blank', 'width=1100,height=850');
  if (!printWindow) {
    window.print();
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        @page {
          size: A4 landscape;
          margin: 8mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        body {
          font-family: 'Work Sans', system-ui, sans-serif;
          color: #0b1c30;
          background: #ffffff;
          margin: 0;
          padding: 10px;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid #001e40;
          padding-bottom: 6px;
          margin-bottom: 8px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-logo {
          width: 40px;
          height: 48px;
          object-fit: contain;
        }
        .header-title h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12.5pt;
          font-weight: 800;
          color: #001e40;
          margin: 0 0 2px 0;
          text-transform: uppercase;
        }
        .header-title p {
          font-size: 8pt;
          color: #475569;
          margin: 0;
          font-weight: 600;
        }
        .header-badge {
          text-align: right;
          font-size: 7.5pt;
          color: #003366;
          background: #eff4ff;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid #cbdbf5;
          font-weight: 700;
          line-height: 1.3;
        }
        .map-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 6px;
          border: 1.5px solid #001e40;
          border-radius: 4px;
          overflow: hidden;
          background: #fafcff;
        }
        .map-image {
          width: 100%;
          max-height: 145mm;
          object-fit: contain;
          display: block;
        }
        .meta-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          font-size: 7.5pt;
          background: #f8f9ff;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 5px 8px;
        }
        .meta-item {
          display: flex;
          flex-direction: column;
        }
        .meta-label {
          color: #64748b;
          font-weight: 500;
          font-size: 7pt;
        }
        .meta-value {
          color: #0f172a;
          font-weight: 700;
        }
        .footer {
          margin-top: 5px;
          font-size: 6.5pt;
          color: #64748b;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #e2e8f0;
          padding-top: 3px;
        }
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            padding: 0;
          }
        }
        .action-bar {
          background: #001e40;
          color: white;
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 6px;
          margin-bottom: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .btn-print {
          background: #1b6d24;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 11px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="action-bar no-print">
        <span style="font-weight:600; font-size:12px;">Pratinjau Cetak Peta Desa Korowelang Kulon • KKN 14 UNWAHAS 2026</span>
        <button class="btn-print" onclick="window.print()">🖨️ Cetak / Simpan PDF</button>
      </div>

      <div class="header">
        <div class="header-left">
          <img src="/logo-kendal.svg" alt="Logo Kendal" class="header-logo" onerror="this.style.display='none'" />
          <div class="header-title">
            <h1>Pemerintah Desa Korowelang Kulon</h1>
            <p>Kecamatan Cepiring, Kabupaten Kendal, Provinsi Jawa Tengah</p>
          </div>
        </div>
        <div class="header-badge">
          KARYA KKN KELOMPOK 14 UNWAHAS 2026<br>
          <span style="font-size:6.5pt; color:#475569;">Peta Fasilitas Umum & Administrasi</span>
        </div>
      </div>

      <div class="map-container">
        <img src="${imageSrc}" alt="Peta Desa Korowelang Kulon" class="map-image" id="printableMap" />
      </div>

      <div class="meta-grid">
        <div class="meta-item">
          <span class="meta-label">Luas Wilayah Total:</span>
          <span class="meta-value">162,447 Ha (100%)</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Tanah Sawah Irigasi:</span>
          <span class="meta-value">105,447 Ha (64,9%)</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Tanah Kering / Pekarangan:</span>
          <span class="meta-value">39,897 Ha (24,6%)</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Kawasan Tambak & Lainnya:</span>
          <span class="meta-value">17,223 Ha (10,5%)</span>
        </div>
      </div>

      <div class="footer">
        <span>Sistem Koordinat: WGS 84 / UTM Zone 49S • Skala Induk: 1:25.000</span>
        <span>Karya KKN Kelompok 14 Universitas Wahid Hasyim (UNWAHAS) 2026 • https://korowelangkulon.kendalkab.go.id</span>
      </div>

      <script>
        const img = document.getElementById('printableMap');
        if (img.complete) {
          setTimeout(() => window.print(), 400);
        } else {
          img.onload = () => setTimeout(() => window.print(), 400);
        }
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};

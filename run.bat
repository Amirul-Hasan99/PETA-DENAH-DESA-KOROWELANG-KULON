@echo off
setlocal enabledelayedexpansion
title Server Lokal - PETA DENAH DESA KOROWELANG KULON

:: Pindah ke direktori proyek tempat skrip ini berada
cd /d "%~dp0"

echo ======================================================================
echo    PETA FASILITAS UMUM & DENAH DESA KOROWELANG KULON
echo    KKN KELOMPOK 14 UNIVERSITAS WAHID HASYIM (UNWAHAS) 2026
echo ======================================================================
echo.

:: 1. Periksa apakah Node.js terinstal
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js tidak ditemukan di sistem ini.
    echo Silakan instal Node.js terlebih dahulu dari https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: 2. Periksa apakah dependencies sudah terinstal
if not exist "node_modules\" (
    echo [INFO] Direktori node_modules belum ditemukan.
    echo [INFO] Menginstal dependensi proyek (npm install)...
    echo.
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo.
        echo [ERROR] Gagal menginstal dependensi (npm install error).
        pause
        exit /b 1
    )
    echo.
    echo [SUKSES] Dependensi berhasil diinstal!
    echo.
)

:: 3. Buka browser secara otomatis setelah server menyala
echo [INFO] Menyiapkan browser lokal...
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:3000"

:: 4. Menjalankan server pengembangan Vite
echo [INFO] Menjalankan server lokal Vite pada http://localhost:3000 ...
echo.
echo ======================================================================
echo    Server sedang berjalan.
echo    - Buka di browser: http://localhost:3000
echo    - Tekan [CTRL + C] di jendela ini untuk menghentikan server.
echo ======================================================================
echo.

call npm run dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo [PERINGATAN] Server berhenti dengan kode keluar: %ERRORLEVEL%
    pause
)

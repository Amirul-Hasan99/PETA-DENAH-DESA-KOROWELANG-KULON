@echo off
setlocal enabledelayedexpansion
title Push to GitHub - PETA DENAH DESA KOROWELANG KULON

:: Pindah ke direktori skrip ini berada
cd /d "%~dp0"

echo ======================================================================
echo    OTOMASI PUSH GITHUB - DESA KOROWELANG KULON KENDAL
echo    Repository: https://github.com/Amirul-Hasan99/PETA-DENAH-DESA-KOROWELANG-KULON
echo ======================================================================
echo.

:: 1. Periksa apakah Git terinstal
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Git tidak ditemukan di sistem ini.
    echo Silakan instal Git terlebih dahulu dari https://git-scm.com/
    echo.
    pause
    exit /b 1
)

:: 2. Inisialisasi Git jika belum ada
if not exist ".git" (
    echo [INFO] Menginisialisasi repositori Git lokal...
    git init
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Gagal inisialisasi Git.
        pause
        exit /b 1
    )
)

:: 3. Konfigurasi Remote Repository
set REPO_URL=https://github.com/Amirul-Hasan99/PETA-DENAH-DESA-KOROWELANG-KULON.git

git remote | findstr /i "^origin$" >nul
if %ERRORLEVEL% equ 0 (
    echo [INFO] Memperbarui URL remote origin ke %REPO_URL%...
    git remote set-url origin %REPO_URL%
) else (
    echo [INFO] Menambahkan remote origin %REPO_URL%...
    git remote add origin %REPO_URL%
)

:: 4. Cek status branch
git branch -M main

:: 5. Input Pesan Commit dari Pengguna (opsional)
echo.
echo Masukkan pesan commit (Tekan [ENTER] untuk pesan otomatis):
set /p COMMIT_MSG="> "

if "!COMMIT_MSG!"=="" (
    for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
    set TANGGAL=!datetime:~6,2!-!datetime:~4,2!-!datetime:~0,4! !datetime:~8,2!:!datetime:~10,2!
    set COMMIT_MSG=Update profil, monografi, peta wilayah, visi misi, dan sejarah desa (!TANGGAL!)
)

echo.
echo [1/3] Menambahkan seluruh perubahan berkas (git add .)...
git add .

echo [2/3] Membuat commit: "!COMMIT_MSG!"...
git commit -m "!COMMIT_MSG!"

echo [3/3] Mengunggah perubahan ke GitHub (git push origin main)...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ======================================================================
    echo  [BERHASIL] Seluruh pembaruan sukses di-push ke GitHub!
    echo  URL: https://github.com/Amirul-Hasan99/PETA-DENAH-DESA-KOROWELANG-KULON
    echo ======================================================================
) else (
    echo.
    echo [PERINGATAN] Push ke branch 'main' mengalami kendala. Mencoba alternatif branch 'master'...
    git branch -M master
    git push -u origin master
    
    if %ERRORLEVEL% equ 0 (
        echo.
        echo ======================================================================
        echo  [BERHASIL] Seluruh pembaruan sukses di-push ke GitHub (branch: master)!
        echo  URL: https://github.com/Amirul-Hasan99/PETA-DENAH-DESA-KOROWELANG-KULON
        echo ======================================================================
    ) else (
        echo.
        echo ======================================================================
        echo  [GAGAL] Terjadi kesalahan saat push ke GitHub.
        echo  Pastikan Anda telah login akun GitHub dan memiliki akses ke repo tersebut.
        echo ======================================================================
    )
)

echo.
echo Tekan sembarang tombol untuk keluar...
pause >nul

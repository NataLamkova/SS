@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo   Signal Soft React Site
echo ========================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js не найден. Установите LTS-версию Node.js и запустите файл снова.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Устанавливаю зависимости...
  call npm install
  if errorlevel 1 (
    echo Ошибка npm install.
    pause
    exit /b 1
  )
)
echo.
echo Сайт запускается. Откройте http://localhost:5173/
echo Для остановки нажмите Ctrl+C.
echo.
call npm run dev
pause

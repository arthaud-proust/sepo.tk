set /p Version="Version: "
cd "dist"
git init
git add *
git commit -m %Version%
git remote add origin https://github.com/arthaud33/sepo.tk.git
git push -u origin master --force 
pause
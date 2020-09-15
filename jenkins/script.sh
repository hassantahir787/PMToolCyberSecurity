source /var/lib/jenkins/.bashrc
rm -rf /var/www/urcours-test-fe/*
cd /var/lib/jenkins/workspace/urcours-test-fe/
npm install
ng build --prod --base-href="/urcours-test/"
cp -r dist/hkp-frontend/* /var/www/urcours-test-fe

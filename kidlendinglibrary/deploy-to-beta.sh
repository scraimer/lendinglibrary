# TODO: When deploying to production, use "ng build --prod"
ng build
rsync -avz -e ssh dist/ craimer.org:/home/scraimer1/beta.kidslibrary.shalom.craimer.org/

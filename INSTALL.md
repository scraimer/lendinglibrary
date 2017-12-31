# Setting up a database

    $ mysql -p
	 // if that doesn't work, you might need to specify a username:
	 $ mysql -p -u youruser@localhost

	 mysql> create database lendinglibrary;
	 mysql> grant all privileges on lendinglibrary.* to 'lendinglibraryadmin'@'localhost' identified by "ReallySecurePassword"; 
	 mysql> flush privileges;
	 mysql> exit;

    

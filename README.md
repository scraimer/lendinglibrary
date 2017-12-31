# lendinglibrary
Book lending library management web app for kindergartner workers (who run a kids library)

# Plan

Here's what the user will see:

* Take a book with a lending library QR code in it, and scan it with a QR code
  scanner, which opens the webapp to the book's page and asks if it's being
  borowed or returned.

* The user selects "borrowed", which shows a drop-down list of all the
  childrens names. Click on one, and the book is marked as borrowed. Done!

* The user selects "returned", and the book is marked as returned. Done!

* At the start of a year, the user adds or removes books, and adds or removes kids.

# Tools

* Database will be a mySQL database, where everything has a "library ID". This limits the scope of what a user can see. For now, I'll hard-code a library ID of 1001 into everything, including the DB. Users belonging to that library may add or remove users to that library, and may manage the library (add books and children).

* Web interface will be angular v2, when I finally get around to creating it.

# Milestones

* QR Code URLs for "borrow" and "lending"

* Libaray management tools: Add children, books (instead of editing the database directly)

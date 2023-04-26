1-Run the command prompt in the project path
For example: cd /d D:\PROJECT\video_tutorial

2-Activate the virtual environment:
env\scripts\activate

3-Run the following commands to create database tables:
	3.1: python manage.py makemigrations
	3.2: python manage.py migrate

4-Create an account to enter the admin and log in from the following address:
python manage.py createsuperuser

5-Run the server:
python manage.py runserver

6:Use the project!
	6.1: Website home page address:
	http://127.0.0.1:8000/
	6.2: Admin page address (uploading files and editing information)
	http://127.0.0.1:8000/admin/
	
	
7:Important note:
For the initial display of videos on the site:
1- Register the instructor on the admin page with the "video information" option.
2- Then on the admin page, open the "video file" option and connect the video to Modares.


Options:
+ upload course
+ play video
+ Tagging system
+ Resize and optimize images
+ Sitemap for SEO
+ Advanced search (only with postgresql database)
+ Filter videos
+ video List pagination
+ Send email to support
+ Rss
+ Comment
+ search (for postgresql database)
+ pannel
+ products categorization
+ Automatic slag
+ Like and dislike
+ Find related videos
+ Login/register/reset-pssword/


pages:
Home page: http://127.0.0.1:8000/
admin page: http://127.0.0.1:8000/admin/
video list: http://127.0.0.1:8000/video-list
contact us: http://127.0.0.1:8000/send-mail/
Rss Feed: http://127.0.0.1:8000/feed/
pannel: http://127.0.0.1:8000/panel/profile (login reqired)
video page: http://127.0.0.1:8000/video-detail/(category)/(id)  (Based on stored information)
my courses: http://127.0.0.1:8000/panel/my-upload/
upload course: http://127.0.0.1:8000/panel/upload-vedio/

from django.urls import path
from .views import *

urlpatterns = [
    path("", home_page, name="home page"),
    path('posts/', all_posts, name="all posts"),
    path('post/<int:pk>', select_post, name="select post"),
]

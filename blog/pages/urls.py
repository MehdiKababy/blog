from django.urls import path
from .views import *

urlpatterns = [
    path("", home_page, name="home page"),
    path("posts/", all_posts, name="all posts"),
    path("posts/<int:pk>/", select_post, name="select post"),
    path("posts/<int:pk>/<str:kk>", select_post, name="select post"),
    path('create_post/', create_post, name="create post"),
]

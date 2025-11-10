from django.shortcuts import render
from .models import Post
from django.shortcuts import get_object_or_404

def home_page(request):
    return render(request, "./home/home.html")
def all_posts(request):
    posts = Post.objects.all()
    return render(request, './all_posts/all_posts.html', {'posts': posts})
def select_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, './select_post/select_post.html', {'post': post})
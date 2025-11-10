from django.shortcuts import get_object_or_404, render, redirect
from .models import Post
from .forms import PostForm


def home_page(request):
    return render(request, "./home/home.html")


def all_posts(request):
    posts = Post.objects.all()
    return render(request, "./all_posts/all_posts.html", {"posts": posts})


def select_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    edit_post = PostForm(instance=post)
    if request.method == "POST":
        edit_post = PostForm(request.POST, instance=post)
        if edit_post.is_valid():
            edit_post.save()
            return redirect("select post", pk=pk)
    else:
        return render(request, "./select_post/select_post.html", {"post": post, 'form': edit_post})
def create_post(request):
    new_post = PostForm()
    if request.method == "POST":
        new_post = PostForm(request.POST)
        if new_post.is_valid():
            new_post.save()
            return redirect("all posts")
    else:
        return render(request, "./create_post/create_post.html", {'form': new_post})
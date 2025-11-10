from django.db import models


class Post(models.Model):
    title = models.CharField(("tilte"), max_length=50)
    text = models.TextField(("your text"))

    def __str__(self):
        return self.title

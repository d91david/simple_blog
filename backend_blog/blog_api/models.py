from django.db import models
from django.utils import timezone

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    main_post = models.BooleanField(default=False)

    def __str__(self):
        return self.title

# Overriding the save method to ensure that there is only one main post at a time.
    def save(self, *args, **kwargs):
        if self.main_post:
            BlogPost.objects.filter(main_post=True).update(main_post=False)
        super().save(*args, **kwargs)

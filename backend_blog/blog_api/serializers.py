from rest_framework import serializers
from .models import BlogPost
from django.utils import timezone

# BlogPostSerializer is a ModelSerializer that adds the formatted_date field to the BlogPost model. It will serialize the data into a format that can be easily converted into JSON data.
class BlogPostSerializer(serializers.ModelSerializer):
    formatted_date = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'date_posted', 'formatted_date', 'main_post']

    def get_formatted_date(self, obj):
        return timezone.localtime(obj.date_posted).strftime('%Y-%m-%d')

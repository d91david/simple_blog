# We import necessary modules from Django and rest_framework to create our API views.

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import BlogPost
from .serializers import BlogPostSerializer

# BlogPostViewSet is a viewset that provides default CRUD operations for the BlogPost model.
class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by('-date_posted')
    serializer_class = BlogPostSerializer

# BlogPostFive is a view that returns the latest five blog posts, starting with the latest blog post.
class BlogPostFive(APIView):
    def get(self, request):
        blogposts = BlogPost.objects.all().order_by('-date_posted')[:5]
        serializer = BlogPostSerializer(blogposts, many=True)
        return Response(serializer.data)

# BlogPostDetail is a view that returns the whole blog post to be displayed on the frontend SinglePost section (/read/{$postId}).
class BlogPostDetail(APIView):
    def get(self, request, post_id):
        post = BlogPost.objects.get(id=post_id)
        serializer = BlogPostSerializer(post)
        return Response(serializer.data)

# MainPost is a view that returns the main post (if one exists). On the Home page, it can be toggled in the editpost section, by default every post has the main_post value False (see models).
class MainPost(APIView):
    def get(self,request):
        try:
            main_post = BlogPost.objects.get(main_post=True)
        except BlogPost.DoesNotExist:
            main_post = None
        
        serializer = BlogPostSerializer(main_post)

        return Response(serializer.data)
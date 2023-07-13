from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, BlogPostFive, BlogPostDetail, MainPost

# DefaultRouter is used to automatically create the URLs for our viewset.
router = DefaultRouter()
router.register(r'blogposts', BlogPostViewSet)

# urlpatterns defines the URL structure of our application.
urlpatterns = [
    path('api/', include(router.urls)),
    path('api/fivelatest/', BlogPostFive.as_view()),
    path('api/blogposts/<int:post_id', BlogPostDetail.as_view()),
    path('api/blogposts/main_post', MainPost.as_view()),
]
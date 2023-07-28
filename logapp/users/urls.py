from django.urls import path
from . import views

# from users.views import (
#     user_list_view,
#     user_redirect_view,
#     user_update_view,
#     user_detail_view,
#     current_user,
#     current_user2,
#     current_user3,
#     UserList,
#     UserList1,
#     NotificationTokenView,
#     CreateNotificationToken,
# )

app_name = "users"
urlpatterns = [
    path('signup/', views.Signup.as_view(), name="sign_up_url"),
    path('login/', views.login_user, name="log_in_url"),
    # path('api/user/ntoken/',CreateNotificationToken.as_view(), name="notification_token_create"),
    # path('api/current-user/', current_user),
    # path('api/current-user3/<str:username>/', current_user3),
    # path('api/token-user/', current_user2),
    # path('api/user-list1/', UserList1.as_view()),
    # path('api/user-list/', UserList.as_view()),
    # path("", view=user_list_view, name="list"),
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),

]

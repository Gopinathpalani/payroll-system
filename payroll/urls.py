from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeViewSet, AttendanceViewSet, SalarySlipViewSet

router = DefaultRouter()
router.register(r'employees', EmployeeViewSet)
router.register(r'attendance', AttendanceViewSet)
router.register(r'salaries', SalarySlipViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
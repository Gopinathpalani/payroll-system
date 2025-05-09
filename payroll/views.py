from rest_framework import viewsets
from .models import Employee, Attendance, SalarySlip
from .serializers import EmployeeSerializer, AttendanceSerializer, SalarySlipSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

class SalarySlipViewSet(viewsets.ModelViewSet):
    queryset = SalarySlip.objects.all()
    serializer_class = SalarySlipSerializer
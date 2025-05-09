from rest_framework import serializers
from .models import Employee, Attendance, SalarySlip

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '_all_'

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '_all_'

class SalarySlipSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalarySlip
        fields = '_all_'
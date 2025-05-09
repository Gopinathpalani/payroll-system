from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    position = models.CharField(max_length=100, default='Employee')
    salary = models.DecimalField(max_digits=10, decimal_places=2, default=50000.00)

    def _str_(self):
        return self.name

class Attendance(models.Model):
    STATUS_CHOICES = [
        ('Present', 'Present'),
        ('Absent', 'Absent'),
        ('Leave', 'Leave'),
    ]
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=20, default='present')

    def _str_(self):
        return f"{self.employee.name} - {self.date} - {self.status}"

class SalarySlip(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    month = models.CharField(max_length=20)
    amount = models.FloatField()

    def _str_(self):
        return f"{self.employee.name} - {self.month}"
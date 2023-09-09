from django.db import models
from django.utils import timezone
import datetime
from django.contrib.auth.models import User



class Kdv(models.Model):
    id = models.AutoField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    editingDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    def __str__(self):
        return f"{self.price*100}%"
    

class Otv(models.Model):
    id = models.AutoField(primary_key=True)
    price = models.FloatField()
    oldPrice = models.FloatField()
    editingDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    def __str__(self):
        return f"{self.price*100}%"

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=20)
    country = models.CharField(max_length=30, null=True)
    city = models.CharField(max_length=30, null=True)
    district = models.CharField(max_length=30, null=True)
    identityNumber = models.CharField(max_length=250)
    picturePath = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name} {self.surname}"
    

   


class UAV(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    creationDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    editingDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    price = models.FloatField()
    previousPrice = models.FloatField()
    deposit = models.FloatField()
    categoryId = models.IntegerField()
    isRented = models.IntegerField()
    desc = models.CharField(max_length=500)
    uavMedia = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    comRange = models.CharField(max_length=255)
    payloadCapacity = models.FloatField()
    ammunition = models.CharField(max_length=255)
    endurance = models.FloatField()
    travelSpeed = models.FloatField()
    fuelCapacity = models.FloatField()
    operationalAttitude = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}" 

    






class Cart(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    uavId = models.ForeignKey(UAV, on_delete=models.CASCADE)
    creationDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    isConfirm = models.IntegerField()
    startDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    endDate = models.DateField()
    kdvId = models.ForeignKey(Kdv, on_delete=models.CASCADE)
    otvId = models.ForeignKey(Otv, on_delete=models.CASCADE)
    total_price = models.FloatField(default=0)

    def calculate_total_price(self):
        uav_price = float(self.uavId.price)
        kdv_percentage = float(self.kdvId.price)
        otv_percentage = float(self.otvId.price)

        total_price = uav_price + (uav_price * kdv_percentage) + (uav_price * otv_percentage)
        return total_price

    # Override the save method to calculate and save the total price
    def save(self, *args, **kwargs):
        self.total_price = self.calculate_total_price()
        super(Cart, self).save(*args, **kwargs)


"""class Media(models.Model):
    id = models.AutoField(primary_key=True)
    path = models.CharField(max_length=255)
    createDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    editingDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    uavId = models.ForeignKey(UAV, on_delete=models.CASCADE)
    order = models.IntegerField()
    typeId = models.IntegerField()
"""


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    createDate = models.DateField(default=datetime.datetime.now().date() , null=True)
    editingDate = models.DateField(default=datetime.datetime.now().date(), null=True)
    def __str__(self):
        return f"{self.createDate} {self.editingDate} {self.name}" 

class CartMap(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    cartId = models.ForeignKey(Cart, on_delete=models.CASCADE)
    createDate = models.DateTimeField(default=timezone.now)



